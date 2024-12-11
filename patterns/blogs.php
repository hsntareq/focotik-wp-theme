<?php
/**
 * Title: Blogs
 * Slug: focotik/blogs
 * Categories: hidden
 * Inserter: no
 */
?>

<!-- wp:group {"metadata":{"name":"Blogs"},"style":{"spacing":{"padding":{"bottom":"3.5rem","top":"0rem"}}},"layout":{"type":"constrained","wideSize":"1170px"}} -->
<div class="wp-block-group" style="padding-top:0rem;padding-bottom:3.5rem"><!-- wp:query {"queryId":43,"query":{"perPage":1,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":true},"metadata":{"categories":["posts"],"patternName":"core/query-grid-posts","name":"Grid"}} -->
<div class="wp-block-query"><!-- wp:categories {"style":{"spacing":{"padding":{"top":"0.63rem","bottom":"1rem"}}}} /-->

<!-- wp:post-template {"className":"blog-list","layout":{"type":"grid","columnCount":3}} -->
<!-- wp:pattern {"slug":"focotik/blog-item"} /-->
<!-- /wp:post-template -->

<!-- wp:spacer {"height":"8px"} -->
<div style="height:8px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:query-pagination {"paginationArrow":"arrow"} -->
<!-- wp:query-pagination-previous {"label":"Previous"} /-->

<!-- wp:query-pagination-numbers /-->

<!-- wp:query-pagination-next {"label":"Next"} /-->
<!-- /wp:query-pagination --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->