<template>
  <Layout>

    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">Гид по омоложению</h1>
      </div>
    </div>

    <g-link 
      :to="item.node.path"
      v-for="item in $page.posts.edges" 
      :key="item.node.id"
      class="journal-post"
    >
      <div class="container journal">
        <h2 class="journal-title">{{ item.node.title }}</h2>
        <p class="journal-excerpt">{{ item.node.excerpt }}</p>
      </div>
    </g-link>
      
  </Layout>
</template>

<page-query>
query Journal {
	posts: allJournalPost {
    edges {
      node {
        id
        title
        excerpt
	path
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>

<style scoped>
.container.journal {
  max-width: 720px;
}
.journal-hero {
  padding: 1.5rem 0;
  text-align: center;
}
.journal-header {
  font-size: 2rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
}
.journal-post {
  display: block;
  padding: 1rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.journal-post > * {
  transition: transform 0.5s ease;
}
.journal-post:hover {
  background-color: var(--color-base-1);
}
.journal-post:hover > * {
  transform: translateX(2rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 1.5rem;
  color: var(--color-contrast);
}
.journal-excerpt {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .journal-post {
    padding: 2rem 0;
  }
}

@media (min-width: 860px) {
  .journal-post {
    padding: 3rem 0;
  }
}
</style>
