// modalScript.js
function toggleModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('steakButton').onclick = function () {
        toggleModal('steakMenuModal');
    };
    document.getElementById('wineButton').onclick = function () {
        toggleModal('wineMenuModal');
    };

    document.querySelectorAll('.closeButton').forEach((button) => {
        button.onclick = function () {
            this.parentElement.style.display = 'none';
        };
    });
});
