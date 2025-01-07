function getTrackLength(n) {
    let min_and_sec = n.trim().split(':');
    
    var min = parseInt(min_and_sec[0], 10);
    var sec = parseInt(min_and_sec[1], 10);
    var totalLen = (min * 60) + sec;
    return totalLen;
}

function SortTable(table_id, n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    table = document.getElementById(table_id);
    switching = true;
    dir = "asc";

    while(switching) {
        switching = false;
        rows = table.rows;

        for(i = 1; i <= (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i+1].getElementsByTagName("td")[n];

            if((table_id === "ostMidis" || table_id === "remixes" || table_id === "otherMidis") && n === 2) {
                let xLen = Number(getTrackLength(x.innerHTML))
                let yLen = Number(getTrackLength(y.innerHTML))

                if(dir == "asc") {
                    if(xLen > yLen) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else if(dir == "desc") {
                    if(xLen < yLen) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if((table_id === "personalWads" || table_id === "communityWads") && n === 3) {
                if(dir == "asc") {
                    if(Number(x.innerHTML) > Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else if(dir == "desc") {
                    if(Number(x.innerHTML) < Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else {
                if(dir == "asc") {
                    if(x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else if(dir == "desc") {
                    if(x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }

        if(shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
            switchcount++;
        }
        else {
            if(switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
