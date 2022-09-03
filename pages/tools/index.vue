<template>
  <article>
    <h1>Tools</h1>

    <ul>
      <li>
        <NuxtLink to="tools/noten"><b>Noten</b></NuxtLink>
        - Just a table for myself that represents the grading system that is relevant to me.
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import {useHead} from '#imports';

useHead({title: 'Tools'});
</script>
