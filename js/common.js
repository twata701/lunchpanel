/**
 * Created by h_shirai on 15/11/29.
 */

// 取得した情報を元にpanelを作成
function makePanels(originJsonData){
	// TBD 雑なので後でちゃんと作り直す
	// TBD object構造が合っているか確認

	var jsonData = originJsonData[0];
	for(var key in jsonData){
		var outerPanel = document.createElement("div");
		outerPanel.className = "divResultPanel";
		outerPanel.innerHTML = `<div class="divPanelInformations"></div>`;
		var tempInfomations = outerPanel.querySelector(".divPanelInformations");	
		tempInfomations.setAttribute("key",key);
		tempInfomations.style.background = "url(" + jsonData[key].restaurant_image + ")";
		tempInfomations.style.backgroundRepeat = "no-repeat";

		var tempInfoDiv = document.createElement("div");
		tempInfoDiv.className = "restaurant_name";
		tempInfoDiv.innerText = jsonData[key].restaurant_name;
		tempInfomations.appendChild(tempInfoDiv);

		var tempInfoDiv = document.createElement("div");
		tempInfoDiv.className = "restaurant_access";
		tempInfoDiv.innerText = jsonData[key].restaurant_access;
		tempInfomations.appendChild(tempInfoDiv);

		document.querySelector("#divResultsPanels").appendChild(outerPanel);    			
	}
}

// 対象の画面に遷移する
function transferPage(targetPage){
	location.href = targetPage + "?searchCondition=" + document.querySelector("#search-field").value;
}

// クエリの値を取得する
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
		    return pair[1];
		}
	}
}

// テストデータ
var testObj = {
	"rName1":{
		gNavi:{
			restaurant_name:"rName1",
			restaurant_access:"rAccess1",
		},
		insta:{
			iTestA:123,
			iTestB:234,
		}
	},
		"rName2":{
		gNavi:{
			restaurant_name:"rName2",
			restaurant_access:"rAccess2",
		},
		insta:{
			iTestA:1123,
			iTestB:2234,
		}
	},
}