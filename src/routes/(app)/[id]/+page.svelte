<script>
	import { render_markdown } from '$lib/markdown'

	export let data
</script>

<ul class="feed">
	{#each data.children as item}
		<li>
         <article class="post-box">
            <aside>
               <a href="/{item.id}">
                  <time datetime={item.created}>{new Date(item.created).toLocaleString()}</time>
               </a>
            </aside>
            {@html render_markdown(item.body)}
         </article>
      
		</li>
	{/each}
</ul>