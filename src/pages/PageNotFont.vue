<template>
    <div class="error-container">
        <h1 class="error-title">404 - Página no encontrada</h1>
        <p class="error-message">Lo sentimos, la página que estás buscando no existe.</p>
    </div>
</template>
<style scoped>
.error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #333;
}
   
.error-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}
   
.error-message {
    font-size: 1.25rem;
}
</style>