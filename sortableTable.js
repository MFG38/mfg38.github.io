function getTrackLength(n) {
    let min_and_sec = n.split(':');

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

            if((table == "ost" || table == "cpMidis" || table == "other") && n == 2) {
                if(dir = "asc") {
                    if(Number(getTrackLength(x.innerHTML)) > Number(getTrackLength(y.innerHTML))) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else if(dir = "desc") {
                    if(Number(getTrackLength(x.innerHTML)) < Number(getTrackLength(y.innerHTML))) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else {
                if(dir = "asc") {
                    if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else if(dir = "desc") {
                    if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
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
