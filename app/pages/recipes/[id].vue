<script setup lang="ts">
import {type Recipe}from"../../../types/types";
const {id}=useRoute().params;
const {data,error}=await useFetch<Recipe>("https://dummyjson.com/recipes?${id}");

if (error.value){
    throw createError({
        statusCode:error.value?.statusCode,
    });
}
</script>

<template>
    <div class="flex flex-col max-v-screen-lg container py-20">
      <!-- Header -->
      <div class="flex flex-col mb-6">
           <h2 class="text-5xl mb- font-semibold">{{ data?.name }}</h2>
            <div class="flex gap- text-xl mb-6">
               <div class="flex items-center gap-1">
                   <Icon name="mdi:clock-time-eight-outline" style="color:#f79f1a" />
                    <span>{{data?.cookTimeMinutes}}</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:fire" style="color:#f79f1a" />
                    <span>{{data?.caloriesPerServing}}</span>
                 </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:star" style="color:#f79f1a" />
                    <span>data?.rating ({{data?.reviewCount}})</span>
                </div>
            </div>
            <hr />
        </div>
    

       <!-- Image -->
       < NuxtImg 
          :src="data?.image" 
          densities="x1"
          sizes="xs:15vw sm:5vw lg:10px" md:10vw"
          alt="" 
          class="w-full max-h-[500px] object-cover rounded-md shadow-5m mb-12" 
        />

    <!-- Ingredients -->
     <div class="mb-8">
        <h2 class="text-3xl font-semibold mb-4">Ingredients</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
            <li v-for="ingredient in data?.ingredients">
                <label class="flex gap-2 items-center">
                    <input class="hidden peer" type="checkbox" />
                    <div 
                       class="relative w-6 h-6 rounded-full border-2 bg-dodgeroll-gold flex items-center justify-center">
                    </div>
                    <span class="peer-checked:line-through">
                        {{ ingredient }}
                    </span>
                </label>
            </li>
        </ul>
     </div>

     <!-- instuctions -->
      <div>
         <h2 class="text-3xl font-medium mb-4">Instructions</h2>
         <ul class="flex flex-col text-lg gap-4">
            <li v-for="(instruction,index) in data?.instructions" class="flex gap-2">
                <span class="flex items-center justify-center bg-dodgeroll-gold w-7 h-7 rounded-full text-white text-sm">
                    {{ index + 1 }}
                </span>
                <span class="flex-1">{{ instruction }}</span>
            </li>
         </ul>
      </div>
    </div>  
</template>