(function(){ 
    var authors = [ 
	{
	    name: "Andrew Reagan",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "reagan.png",
	    webpage: "http://andyreagan.com",
	    linkedin: "https://www.linkedin.com/pub/andy-reagan/18/a17/2a8",
	    twitter: "andyreagan",
	    strava: "http://www.strava.com/athletes/136573",
	    // facebook: "https://www.facebook.com/areagan",
	    // youtube: "https://www.youtube.com/user/TheAndyreagan",
	    // vine: "",
	    // instagram: "",
	    // scholar: "http://scholar.google.com/citations?user=R2rheH4AAAAJ",
	    github: "https://github.com/andyreagan",
	    // bitbucket: "https://bitbucket.org/andrewreagan",
	    // stackoverflow: "http://stackoverflow.com/users/3780153/andyreagan",
	    // plus: "https://www.google.com/+AndyReagan",
	    // pinterest: "http://www.pinterest.com/andyreagan/",
	    facebook: "",
	    youtube: "",
	    vine: "",
	    instagram: "",
	    scholar: "",
	    bitbucket: "",
	    stackoverflow: "",
	    plus: "",
	    pinterest: "",
	},

	{
	    name: "Lewis Mitchell",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "mitchell.png",
	    webpage: "http://www.uvm.edu/~lmitche1/main/Welcome.html",
	    linkedin: "",
	    twitter: "dr_pyser",
	    strava: "",
	    facebook: "",
	    youtube: "",
	    vine: "",
	    instagram: "",
	    scholar: "", github: "",
	    bitbucket: "",
	    stackoverflow: "",
	    plus: "",
	    pinterest: "",
	},
	{
	    name: "Dilan Kiley",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "dilan.kiley-2.jpg",
	    webpage: "http://www.uvm.edu/~dkiley/",
	    linkedin: "https://www.linkedin.com/in/dilan-kiley-a0154a116",
	    twitter: "dilankiley",
	    strava: "",
	    facebook: "",
	    youtube: "",
	    vine: "",
	    instagram: "",
	    scholar: "", github: "",
	    bitbucket: "",
	    stackoverflow: "",
	    plus: "",
	    pinterest: "",
	},
	{
	    name: "Christopher M. Danforth",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "danforth.png",
	    webpage: "http://www.uvm.edu/~cdanfort/main/home.html",
	    linkedin: "",
	    twitter: "chrisdanforth",
	    strava: "https://www.strava.com/athletes/642263",
	    facebook: "",
	    youtube: "",
	    vine: "",
	    instagram: "",
	    scholar: "", github: "",
	    bitbucket: "",
	    stackoverflow: "",
	    plus: "",
	    pinterest: "",
	},
	{
	    uname: "pdodds",
	    name: "Peter Dodds",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "dodds.png",
	    webpage: "http://www.uvm.edu/~pdodds/",
	    linkedin: "https://www.linkedin.com/in/petersheridandodds",
	    twitter: "peterdodds",
	    strava: "http://www.strava.com/athletes/175558",
	    facebook: "",
	    youtube: "https://www.youtube.com/channel/UCNNRDsx4HzQgIpABkiZ7YJg",
	    vine: "",
	    instagram: "",
	    scholar: "", // google scholar
	    github: "",
	    bitbucket: "",
	    stackoverflow: "",
	    plus: "", // google plus
	    pinterest: "",
	},
    ];

    var mainrow = d3.select("#teamrow");
    for (var i=0; i<authors.length; i++) {
	var authorcount = 0;
	//console.log(i);
	console.log(authors[i].name);
	var newdiv = mainrow.append("div").attr("class","col-xs-12 col-sm-4 col-centered col-fixed");
	var divcenter = newdiv.append("center");
	divcenter.append("img").attr("class","teampim blackwhite img-circle").attr("src","images/humans/circles/"+authors[i].image).attr("width","135px");
	// divcenter.append("p").attr("class","nobreak").text(authors[i].name);
	divcenter.append("p").attr("class","teamp").text(authors[i].name);
	if (authors[i].webpage.length > 0) {
	    divcenter.append("a").attr("href",authors[i].webpage).attr("target","_blank").html("<i class=\"fa fa-external-link fa-fw fa-lg\"></i>");
	}
	if (authors[i].linkedin.length > 0) {
	    divcenter.append("a").attr("href",authors[i].linkedin).attr("target","_blank").html("<i class=\"fa fa-linkedin fa-fw fa-lg\"></i>");
	}
	if (authors[i].twitter.length > 0) {
	    divcenter.append("a").attr("href","https://twitter.com/"+authors[i].twitter).attr("target","_blank").html("<i class=\"fa fa-twitter fa-fw fa-lg\"></i>");
	}
	if (authors[i].youtube.length > 0) {
	    divcenter.append("a").attr("href",authors[i].youtube).attr("target","_blank").html("<i class=\"fa fa-youtube-play fa-fw fa-lg\"></i>");
	}
	if (authors[i].github.length > 0) {
	    divcenter.append("a").attr("href",authors[i].github).attr("target","_blank").html("<i class=\"fa fa-github fa-fw fa-lg\"></i>");
	}
	if (authors[i].strava.length > 0) {
	    divcenter.append("a").attr("href",authors[i].strava).attr("target","_blank").html("<img height=\"18\" src=\"fonts/custom/icon-strava-blue.svg\" class=\"fa-fw fa-lg\">");
	}
	if (authors[i].vine.length > 0) {
	    divcenter.append("a").attr("href",authors[i].vine).attr("target","_blank").html("<i class=\"fa fa-vine fa-fw fa-lg\"></i>");
	}
	if (authors[i].facebook.length > 0) {
	    divcenter.append("a").attr("href",authors[i].facebook).attr("target","_blank").html("<i class=\"fa fa-facebook fa-fw fa-lg\"></i>");
	}
	if (authors[i].instagram.length > 0) {
	    divcenter.append("a").attr("href",authors[i].instagram).attr("target","_blank").html("<i class=\"fa fa-instagram fa-fw fa-lg\"></i>");
	}
	if (authors[i].scholar.length > 0) {
	    divcenter.append("a").attr("href",authors[i].scholar).attr("target","_blank").html("<i class=\"fa fa-graduation-cap fa-fw fa-lg\"></i>");
	}
	if (authors[i].bitbucket.length > 0) {
	    divcenter.append("a").attr("href",authors[i].bitbucket).attr("target","_blank").html("<i class=\"fa fa-bitbucket fa-fw fa-lg\"></i>");
	}
	if (authors[i].stackoverflow.length > 0) {
	    divcenter.append("a").attr("href",authors[i].stackoverflow).attr("target","_blank").html("<i class=\"fa fa-stack-overflow fa-fw fa-lg\"></i>");
	}
	if (authors[i].plus.length > 0) {
	    divcenter.append("a").attr("href",authors[i].plus).attr("target","_blank").html("<i class=\"fa fa-google-plus fa-fw fa-lg\"></i>");
	}
	if (authors[i].pinterest.length > 0) {
	    divcenter.append("a").attr("href",authors[i].pinterest).attr("target","_blank").html("<i class=\"fa fa-pinterest fa-fw fa-lg\"></i>");
	}
	console.log(authorcount);
    };
})();
