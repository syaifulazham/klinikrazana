<!-- src/routes/index.svelte -->
<script>
    import { getConsultationBills } from '../consultationServices';
  
    let consultationBills = [];
  
    onMount(async () => {
      consultationBills = await getConsultationBills();
    });
  </script>
  
  <main>
    <h1>Consultation Bills</h1>
    {#if consultationBills.length > 0}
      <ul>
        {#each consultationBills as bill (bill.id)}
          <li>{bill.nama_syarikat}</li>
          <!-- Add other fields as needed -->
        {/each}
      </ul>
    {:else}
      <p>No consultation bills found.</p>
    {/if}
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }
  
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 2em;
      margin-bottom: 10px;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      margin: 5px 0;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  </style>
  