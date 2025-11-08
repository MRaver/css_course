const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.getAttribute("datetime", thisYear)
year.textContent = thisYear