const block = [
    null, null, null,
    null, null, null,
    null, null, null
];

const root = document.createElement('div');
root.className = 'root';
document.body.append(root);
root.style.display = 'grid';
root.style.justifyContent = 'center';
root.style.gridTemplateColumns = '1fr 1fr 1fr';
root.style.width = '70%';
root.style.margin = 'auto'

/* 
//if (valueBlock) box.innerText = valueBlock;
for (let i = 1; i <= block.length; i++) {
    const box = document.createElement('div');
    box.className = 'area';
    root.append(box);
    box.style.border = "2px solid black";
    box.style.width = '100px';
    box.style.height = '100px';
}
const cells = root.querySelectorAll('.area');

function onClick(cell) {
    cell.addEventListener('click', () => console.log(true))
}
console.log(cells)
cells.forEach(onClick) */

function isWinner(flag) {
    if (block[0] == block[1] && block[1] == block[2] && block[2] == flag) {
        return console.log(flag, ' - winner');
    } else if (block[0] == block[3] && block[3] == block[6] && block[6] == flag) {
        return console.log(flag, ' - winner');
    } else if (block[0] == block[4] && block[4] == block[8] && block[8] == flag) {
        return console.log(flag, ' - winner');
    }
    else if (block[1] == block[4] && block[4] == block[7] && block[7] == flag) {
        return console.log(flag, ' - winner');
    }
    else if (block[2] == block[5] && block[5] == block[8] && block[8] == flag) {
        return console.log(flag, ' - winner');
    } else if (block[3] == block[4] && block[4] == block[5] && block[5] == flag) {
        return console.log(flag, ' - winner');
    }
    else if (block[6] == block[8] && block[8] == block[7] && block[7] == flag) {
        return console.log(flag, ' - winner');
    }
    else if (block[2] == block[4] && block[4] == block[6] && block[6] == flag) {
        return console.log(flag, ' - winner');
    }
}

let currentFlag = 'x';
const flagging = (event, indx) => {
    if (event.currentTarget.innerText == '') {
        if (currentFlag == '0') {
            block[indx] = currentFlag;
            event.currentTarget.innerText = currentFlag;
            isWinner(currentFlag)
            currentFlag = 'x';
            console.log(block)
        } else {
            block[indx] = currentFlag;
            event.currentTarget.innerText = currentFlag;
            isWinner(currentFlag)
            currentFlag = '0';
            console.log(block)
        }
    }
}

const creator = function (valueBlock, idxCell) {
    const box = document.createElement('div');
    //if (valueBlock) box.innerText = valueBlock;
    box.className = 'area';
    root.append(box);
    box.style.border = "2px solid black";
    box.style.fontSize = '25px'
    box.style.width = '100%';
    box.style.height = '5rem';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';
    box.addEventListener('click', (event) => flagging(event, idxCell))
}
block.forEach((elem, idx) => creator(elem, idx))
