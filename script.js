
document.getElementById("trackForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const code = document.getElementById("trackingCode").value.trim();
    const validCode = "TR599762932";

    const resultSection = document.getElementById("result");
    const errorSection = document.getElementById("error");
    const packageProof = document.getElementById("package-proof");

    if (code === validCode) {
        resultSection.style.display = "block";
        errorSection.style.display = "none";
        packageProof.style.display = "block";
    } else {
        resultSection.style.display = "none";
        errorSection.style.display = "block";
        packageProof.style.display = "none";
    }
});
