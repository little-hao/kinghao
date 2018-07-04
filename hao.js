var count = 0;
var turn = "cross";
var over = false;
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function nextMove(x) {
    if (!x.innerHTML && over === false) {
        var id = x.id;
        console.log(arr);
        if (turn === "cross") {
            x.innerHTML = `<i class="iconfontyyy" style="color:#65b0ed;">&#xe91f;</i>`;
            arr[id - 1] = "cross";
            turn = "circle";
        } else {
            x.innerHTML = `<i class="iconfontyyy" style="color:#de6d77;">&#xe612;</i>`;
            arr[id - 1] = "circle";
            turn = "cross";
        }
        count += 1;
        check();
        console.log(over);
        console.log(count);
        if (over === false && count === 9) {
            over = true;
            setMsg(`<span>战成平手</span>`);
            showBtn();
        }
    }
}

function winner(x) {
    over = true;
    if (x === "cross") {
        setMsg(`<span class="blue">叉叉赢了</span>`);
    } else {
        setMsg(`<span class="red">圈圈赢了</span>`);
    }
    showBtn();
}

function setMsg(x) {
    document.getElementById("header").innerHTML = x;
}

function reset() {
    console.log("ok");
    over = false;
    setMsg(`<span class="red">Tic</span>
    <span class="blue">Tac</span>
    <span class="red">Toe</span>`);
    count = 0;
    turn = "cross";
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.getElementById("reset").setAttribute("class", "hide");
    document.getElementById("table").innerHTML = `<tr>
        <td id="1" onclick="nextMove(this)"></td>
        <td id="2" onclick="nextMove(this)"></td>
        <td id="3" onclick="nextMove(this)"></td>
    </tr>
    <tr>
        <td id="4" onclick="nextMove(this)"></td>
        <td id="5" onclick="nextMove(this)"></td>
        <td id="6" onclick="nextMove(this)"></td>
    </tr>
    <tr>
        <td id="7" onclick="nextMove(this)"></td>
        <td id="8" onclick="nextMove(this)"></td>
        <td id="9" onclick="nextMove(this)"></td>
    </tr>`
}

function showBtn() {
    document.getElementById("reset").setAttribute("class", "");
};

function check() {
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
        winner(arr[0]);
    };
    if (arr[3] === arr[4] && arr[4] === arr[5]) {
        winner(arr[3]);
    };
    if (arr[6] === arr[7] && arr[7] === arr[8]) {
        winner(arr[6]);
    };
    if (arr[0] === arr[3] && arr[3] === arr[6]) {
        winner(arr[0]);
    };
    if (arr[1] === arr[4] && arr[4] === arr[7]) {
        winner(arr[1]);
    };
    if (arr[2] === arr[5] && arr[5] === arr[8]) {
        winner(arr[2]);
    };
    if (arr[0] === arr[4] && arr[4] === arr[8]) {
        winner(arr[0]);
    };
    if (arr[2] === arr[4] && arr[4] === arr[6]) {
        winner(arr[2]);
    };
}
