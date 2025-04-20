import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { service_header } from '../data/services_data.js';

export const preloadAllImagesHeader = createAsyncThunk(
  'Header/preloadAllImagesHeader',
  async ({ input, name, pathname }, { getState, rejectWithValue }) => {
    try {
      const state = getState().Header;
      const bgCache = {};
      const cardCache = {};

      if (Array.isArray(input)) {
        await Promise.all(input.map(service =>
          Promise.all([
            new Promise(resolve => {
              if (state.imageCache[service.id]) return resolve();
              const img = new Image();
              img.src = service.background;
              img.onload = () => {
                bgCache[service.id] = service.background;
                resolve();
              };
              img.onerror = () => {
                console.warn(`Failed to load bg image: ${service.background}`);
                resolve();
              };
            }),
            new Promise(resolve => {
              if (state.cardsCache[service.id]) return resolve();
              const img = new Image();
              img.src = service.image;
              img.onload = () => {
                cardCache[service.id] = service.image;
                resolve();
              };
              img.onerror = () => {
                console.warn(`Failed to load card image: ${service.image}`);
                resolve();
              };
            })
          ])
        ));

        return {
          type: 'multi',
          bgCache,
          cardCache,
          pathname
        };
      } else {
        return await new Promise(resolve => {
          if (state.imageCache[name]) return resolve();
          const img = new Image();
          img.src = input;
          img.onload = () => resolve({ type: 'single', name, input, pathname });
          img.onerror = () => {
            console.warn(`Failed to load image: ${input}`);
            resolve({ type: 'single', name, input, pathname });
          };
        });
      }

    } catch (error) {
      console.error("Error in preloadAllImagesHeader:", error);
      return rejectWithValue(error.message || "Unknown error");
    }
  }
);



 const HeaderSlice=createSlice({
    name:"headerSlice",
    initialState:{
        imageCache:{},
        cardsCache:{},
        isImagesLoadedHeader:{
            location:"",
            loading:true
        },
        selectedService:{
                isSelected: true,
                image: service_header[0].background,
                id: 1,
                title: service_header[0].background_title,
                text: service_header[0].background_text
        }    
    },
    reducers:{
        setSelectedService:(state,action)=>{
            state.selectedService={
                isSelected: true,
                image: action.payload.background,
                id: action.payload.id,
                title: action.payload.background_title,
                text: action.payload.background_text
            }
        }
        , setIsImagesLoadedHeader:(state,action)=>{
            state.isImagesLoadedHeader={
                loading:action.payload.loading,
                location:action.payload.location
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(preloadAllImagesHeader.pending, (state) => {
          state.isImagesLoadedHeader.loading = true;
        })
        .addCase(preloadAllImagesHeader.fulfilled, (state, action) => {
          if (!action.payload) return;
          const { type, pathname } = action.payload;
  
          if (type === 'multi') {
            state.imageCache = { ...state.imageCache, ...action.payload.bgCache };
            state.cardsCache = { ...state.cardsCache, ...action.payload.cardCache };
          } else if (type === 'single') {
            state.imageCache[action.payload.name] = action.payload.input;
          }
          state.isImagesLoadedHeader = {
            loading: false,
            location: pathname
          };
        })
        .addCase(preloadAllImagesHeader.rejected, (state) => {
          state.isImagesLoadedHeader.loading = false;
        });
    
    }
})
export default HeaderSlice.reducer
export const {setSelectedService,setIsImagesLoadedHeader}=HeaderSlice.actions