<template>
  <article>
    <h1>Error 404</h1>
    <p>
      You know what this means...<br/>Why not try to start from
      the
      <NuxtLink to="/">Start</NuxtLink>?
    </p>
    <p>While you're here you may just say hello to Magic.</p>
    <pre>
           __n__n__
    .------`-\00/-'
   /  ##  ## (oo)
  / \## __   ./
     |//YY \|/
     |||   |||</pre>
  </article>
</template>

<script setup lang="ts">
import {useHead} from '#imports';

useHead({title: '404'});
</script>
