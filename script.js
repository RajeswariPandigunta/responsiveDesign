// bytewebster.com
// bytewebster.com
// bytewebster.com
function showSweetAlert() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Record has been successfully deleted.',
        'success'
      )
    }
  })
}


document.getElementById("search-button").addEventListener("click", searchMonth);

function searchMonth() {
    const searchTerm = document.getElementById("name-input").value.toLowerCase();
    const barToHighlight = document.getElementById(searchTerm);
    
    if (barToHighlight) {
        // Reset the previous highlighted bar
        const previousHighlighted = document.querySelector(".highlighted");
        if (previousHighlighted) {
            previousHighlighted.classList.remove("highlighted");
        }
        
        // Highlight the searched month
        barToHighlight.classList.add("highlighted");
    } else {
        alert("Month not found!");
    }
}




