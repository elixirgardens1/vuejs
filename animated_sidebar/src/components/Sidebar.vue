<script setup>
  import {ref} from 'vue'
  
  const is_expanded = ref(localStorage.getItem('is_expanded') == 'true')
  // const is_expanded = ref(false)
  
  const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem('is_expanded', is_expanded.value)
  }
</script>

<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../assets/logo.svg" alt="Vue Logo">
    </div>
    
    <!-- Double arrow icon -->
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    
    <!-- Menu options -->
    <h3>Menu</h3>
    <div class="menu">
      <RouterLink class="btn" to="/">
        <span class="material-icons">home</span>
        <span class="txt">Home</span>
      </RouterLink>
      <RouterLink class="btn" to="/about">
        <span class="material-icons">visibility</span>
        <span class="txt">About</span>
      </RouterLink>
      <RouterLink class="btn" to="/team">
        <span class="material-icons">group</span>
        <span class="txt">Team</span>
      </RouterLink>
      <RouterLink class="btn" to="/contact">
        <span class="material-icons">email</span>
        <span class="txt">Contact</span>
      </RouterLink>
    </div>
    
    <div class="flex"></div>
    
    <div class="menu">
      <RouterLink class="btn" to="/settings">
        <span class="material-icons">settings</span>
        <span class="txt">Settings</span>
      </RouterLink>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    
    background: var(--dark);
    color: var(--light);
    
    transition: .2s ease-out;
    
    .flex {
      flex: 1 1 0;
    }
    
    .logo {
      margin-bottom: 1rem;
      img {
        width: 2rem;
      }
    }
    
    .menu-toggle-wrap {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;
      position: relative;
      top: 0;
      transition: .2s ease-out;
      
      .menu-toggle {
        transition: .2s ease-out;
        
        .material-icons {
          font-size: 2rem;
          color: var(--light);
          transition: .2s ease-out;
        }
        
        &:hover {
          .material-icons {
            color: var(--primary); /* Change icon color when hovered */
            transform: translateX(.2rem); /* Move icon when hovered */
          }
        }
      }
    }
    
    /* Hide menu text when closed */
    h3, .btn .txt {
      opacity: 0;
      transition: .3s ease-out;
    }
    
    h3 {
      color: var(--grey);
      font-size: .875rem;
      margin-bottom: .5rem;
      text-transform: uppercase;
    }
    
    .menu {
      margin: 0 -1rem;
      
      .btn {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: .5rem 1rem;
        transition: .2s ease-out;
        
        .material-icons {
          font-size: 2rem;
          color: var(--light);
          transition: .2s ease-out;
        }
        
        .txt {
          color: var(--light);
          transition: .2s ease-out;
        }
        
        &:hover, &.router-link-exact-active {
          background: var(--dark-alt);
          
          .material-icons {
            color: var(--primary);
            transition: .2s ease-out;
          }
        }
        
        &.router-link-exact-active {
          border-right: 5px solid var(--primary);
        }
      }
    }
    
    
    &.is-expanded {
      width: var(--sidebar-width);
      
      .menu-toggle-wrap {
        top: -3rem;
        
        .menu-toggle {
          transform: rotate(-180deg);
        }
      }
      
      /* Show menu text when open */
      h3, .btn .txt {
        opacity: 1;
      }
      
      .btn {
        .material-icons {
          margin-right: 1rem;
        }
      }
    }
    
    @media (max-width: 768px) {
      position: fixed;
      z-index: 99;
    }
  }
</style>
