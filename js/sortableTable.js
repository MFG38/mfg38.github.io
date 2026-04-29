function getTrackLength(n) {
    let min_and_sec = n.trim().split(':');
    
    var min = parseInt(min_and_sec[0], 10);
    var sec = parseInt(min_and_sec[1], 10);
    var totalLen = (min * 60) + sec;
    return totalLen;
}

function SortTable(table_id, n) {
    const table = document.getElementById(table_id);
    
    let prevCol = Number(table.getAttribute("data-sort-col"));
    let prevDir = table.getAttribute("data-sort-dir") || "asc";
    let dir;

    if(prevCol === n) {
        dir = (prevDir === "asc") ? "desc" : "asc";
    } else {
        dir = "asc";
    }

    table.setAttribute("data-sort-col", n);
    table.setAttribute("data-sort-dir", dir);

    let switching = true;
    let switchcount = 0;

    while(switching) {
        switching = false;
        const rows = table.rows;

        for(let i = 1; i < rows.length - 1; i++) {
            let shouldSwitch = false;
            let x = rows[i].getElementsByTagName("td")[n];
            let y = rows[i+1].getElementsByTagName("td")[n];

            if((table_id === "ostMidis" || table_id === "remixes" || table_id === "otherMidis") && n === 2) {
                let xLen = Number(getTrackLength(x.innerHTML))
                let yLen = Number(getTrackLength(y.innerHTML))

                if(dir === "asc" && xLen > yLen) shouldSwitch = true;
                if(dir === "desc" && xLen < yLen) shouldSwitch = true;

            } else if((table_id === "personalWads" || table_id === "communityWads") && n === 3) {
                let xVal = Number(x.innerHTML);
                let yVal = Number(y.innerHTML);

                if(dir === "asc" && xVal > yVal) shouldSwitch = true;
                if(dir === "desc" && xVal < yVal) shouldSwitch = true;

            } else {
                let xText = x.innerText.toLowerCase();
                let yText = y.innerText.toLowerCase();

                if(dir === "asc" && xText > yText) shouldSwitch = true;
                if(dir === "desc" && xText < yText) shouldSwitch = true;
            }

            if(shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                switching = true;
                switchcount++;
            }
        }
    }
}
