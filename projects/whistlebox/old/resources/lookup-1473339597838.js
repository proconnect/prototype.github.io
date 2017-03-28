(function(window, undefined) {
  var dictionary = {
    "cd00ea09-759a-43ec-83ec-5039714aa346": "Add New",
    "40a46a53-7d06-41dd-8796-f24ea69b3d6b": "HUD",
    "5c98af31-4cbf-42f1-8bc8-a9492135f1a0": "Reverse App",
    "14860366-7d9c-4c5e-a822-270583d15fff": "Playlists",
    "b25617ac-3c30-419a-a041-d8c339a8b931": "Loading Screen",
    "bc19b626-df88-4bf8-85a7-84ecd12cadf6": "Home",
    "70431ece-dde3-46dd-a4ec-a55b66af6d6c": "App",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);