function submit() {
    var siteName = document.getElementById("sitename").value;
    var siteURL = document.getElementById('siteurl').value;

    var site = {
        name: siteName,
        url: siteURL
    };

    if (localStorage.getItem('bookmarks') == null) {
        var bookmarkList = [];
        bookmarkList.push(site);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
    } else {
        var bookmarkList = JSON.parse(localStorage.getItem("bookmarks"));
        bookmarkList.push(site);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
    }
    resetForm();
    showBookmarks();
}
