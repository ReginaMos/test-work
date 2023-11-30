const table = document.getElementById('table-content');
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
  .then((response) => response.json())
  .then((data) => {
                console.log(data);
                data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${item.id}</td><td>${item.symbol}</td><td>${item.name}</td>`;
                if (item.symbol === "usdt") {
                  row.style.backgroundColor = 'green';
                }

                table.appendChild(row);
                });
            })
  .catch((error) => console.error(error));
        