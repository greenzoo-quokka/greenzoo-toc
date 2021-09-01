<template>
  <div id="global-layout">
    <!-- <PageInfo /> -->
    <component :is="$page.path ? 'Layout' : 'NotFound'" />
    <!-- <Comment /> -->
  </div>
</template>