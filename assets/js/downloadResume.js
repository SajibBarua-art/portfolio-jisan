document.getElementById('downloadBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = './assets/pdf/Resume_MD_Golam_Kibria.pdf'; // Replace with the actual file path
    link.download = 'MD_Golam_Kibria_Resume.pdf'; // Set the downloaded file name
    link.click();
});