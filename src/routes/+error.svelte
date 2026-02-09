<script lang="ts">
  import { page } from '$app/state';
</script>
<div class="outer">
  <div class="inner text-center">
    <h1 class="mb-4">오류가 발생했습니다.</h1>
    <p>페이지를 불러오는 중 오류가 발생했습니다. <br>페이지가 삭제되었거나 잘못된 주소일 수 있습니다.</p>
    <p class="mt-4">Error code: <code>{page.status}</code></p>
    <div class="mt-4">
      <a href=".." onclick={(e) => { e.preventDefault(); history.back(); }}>이전 페이지로 돌아가기</a>
    </div>
  </div>
</div>
<style>
  .outer {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #e8eaec;
  }
  .inner {
    max-width: 600px;
    padding: 2rem;
    background: white;
    border-radius: 1em;
    box-shadow: 0 0.5em 1em -0.5em #0003;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  a {
    color: royalblue;
    text-decoration: underline;
  }
</style>