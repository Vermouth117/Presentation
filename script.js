
/* 全てのliタグの要素を取得して
   1つ1つに対してactiveを付けたり消したりする */

   const list = document.querySelectorAll(".list");

   function activeLink() {
      list.forEach(item => {                 // アロー関数 //
          item.classList.remove("active");   // .remove()：class除去 //
      });
      this.classList.add("active");          // this：今選択(クリック)したもの | .classList：class属性を返す | .add()：class追加 //
   }
   
   list.forEach(item => {   // 与えられた関数を、配列の各要素に対して1度ずつ実行 //
       item.addEventListener("click", activeLink);
   });
   
   
   
   /* 雪をランダムの大きさで自動的に生成 */
   
   let snowContainer = document.querySelector(".snow-container");
   
   const createSnow = () => {             // アロー関数式：function() { }と同じ //
   
       // 雪の要素を生成 //
       let snow = document.createElement("span");   
       snow.className = "snow";           // spanタグがsnowというclass名を持つ //
   
       // 雪の大きさをランダムに決める //
       let snowSize = Math.random() * 10;
       snow.style.width = snowSize + "px";
       snow.style.height = snowSize + "px";
   
       // 雪の降り始め位置を決定する //
       snow.style.left = Math.random() * 100 + "%";   // 親(snow-container)から左にどれだけ離れているか //
   
       snowContainer.appendChild(snow);
   
       // 15秒後に雪を消す //
       setTimeout(() => {
           snow.remove();
       }, 15000);
   }
   
   setInterval(createSnow, 80);   // 一定の遅延間隔を置く //
   
   
   
   /* MDNをクリックすると、MDN画面表示 */
   
   const contents = document.querySelectorAll(".content");
   
   function widthLink() {
       contents.forEach(item => {             // アロー関数 //
           item.classList.remove("active");   // .remove()：class除去 //
       });
       if (this.innerText === "MDN") {
           document.querySelector(".content.MDN").classList.add("active");   // this：今選択(クリック)したもの | .classList：class属性を返す | .add()：class追加 //
       } else if (this.innerText === "SPO") {
           document.querySelector(".content.SPO").classList.add("active");
       }
   }
      
   list.forEach(item => {   // 与えられた関数を、配列の各要素に対して1度ずつ実行 //
       item.addEventListener("click", widthLink);
   });
   
   
   
   /* 個人情報をホバーしたらメニューバー表示 */
   
   const info = document.querySelector(".menubar");
   const infoOfList = document.querySelector(".list.info");
   const ul = document.querySelector(".transition");
   
   function addLink() {
       if (this.innerText === "個人情報") {
           info.style.display = "block";
           info.style.paddingLeft = "500px";
       }
   }
   infoOfList.addEventListener("mouseenter", addLink);
   
   function removeLink() {
    info.style.display = "none";
   }
   info.addEventListener("mouseleave", removeLink);


   /* 個人情報メニューバーをクリックすると色が変わる */

   const menus = [];
   for (let i = 1; i <= 4; i++) {
    let menu = document.getElementById(`menu${i}`);
    menus.push(menu);
   }

   document.addEventListener("click", (e) => {
    console.log(e.target.id);
    menus.map(menu => {
        if(e.target.id === menu.id) {
            menu.classList.add("active");
        } else {
            menu.classList.remove("active");
        }
    });
   });