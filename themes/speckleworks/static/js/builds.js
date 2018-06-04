// based on https://github.com/rufuspollock/s3-bucket-listing

// document.getElementById('listing').innerHTML = "<pre>Loading...</pre>";

// var nwo = "speckleworks/SpeckleRhino";
populate("speckleworks/SpeckleRhino");
populate("speckleworks/SpeckleCore");

function populate(nwo) {
  var api_url = "https://ci.appveyor.com/api/";

  var url = `${api_url}/projects/${nwo}/history?recordsNumber=10&branch=master`;

  var xhr = new XMLHttpRequest();
  xhr.open('get', url, false);
  xhr.send(null);

  var json = JSON.parse(xhr.response);

  var items = [];
  for (var i = 0; i < json.builds.length; i++) {
    var build = json.builds[i]

    if (build.status != 'success') {
      continue;
    }

    // uncomment to call appveyor api to get job id (for direct artifact links)
    // var url = `${api_url}/projects/${nwo}/build/${build.version}`;
    // xhr.open('get', url, false);
    // xhr.send(null);
    //
    // var build_json = JSON.parse(xhr.response);
    //
    // var jobId = build_json.build.jobs[0].jobId;

    var item = {};

    var date = Date.parse(build.finished);
    var date = new Date(build.finished);

    item.date = date.toISOString();
    item.number = build.version;
    item.ci_url = `https://ci.appveyor.com/project/${nwo}/build/${build.version}`;

    item.sha = build.commitId;
    item.sha_short = item.sha.slice(0,7);
    item.github_url = `https://github.com/${nwo}/commit/${item.sha}`;
    // item.message = build.message; // not currently used

    // item.artifact = 'specklerhino.rhi'; // use generic download icon instead
    // NOTE: don't use padRightUrl() for glyph - it gets truncated which causes issues
    item.artifact = "<i class='fa fa-download'></i>";
    // var artifact_url = `${api_url}/buildJobs/${jobId}/artifacts/specklerhino.rhi`;
    // use generic url to save api calls
    var artifact_url = `https://ci.appveyor.com/project/${nwo}/build/${build.version}/artifacts`;
    item.artifact_url = artifact_url;

    item.ref = build.branch;
    if (build.pullRequestId != null) {
      item.ref = '#' + build.pullRequestId;
      item.ref_url = `https://github.com/${nwo}/pull/${build.pullRequestId}`;
    }

    items.push(item);
  }

  var name = nwo.split('/')[1];

  document.getElementById('listing' + name).innerHTML = '<pre>' + prepareTable(items) + '</pre>';
}

function prepareTable(items) {
  // items is object like:
  // [
  //   {
  //      number: ..
  //      ref: ..
  //      sha: ..
  //      sha_short: ..
  //      github_url: ..
  //      artifact: ..
  //      artifact_url: ..
  //   },
  //   ...
  // ]
  var cols = [ 29, 11, 12, 11, 10 ];
  var content = [];
  content.push(padRight('Date', cols[0]) + padRight('Number', cols[1]) + padRight('Commit', cols[2]) + padRight('Branch', cols[3]) + 'Artifacts\n');
  content.push(new Array(cols[0] + cols[1] + cols[2] + cols[3] + cols[4] + 4).join('-') + '\n');


  // jQuery.each(items, function(idx, item) {
  items.forEach(function(item) {
    var row = renderRow(item, cols);
    content.push(row + '\n');
  });

  return content.join('');
}

function renderRow(item, cols) {
  var row = '';
  row += padRight(item.date, cols[0]);
  row += padRightUrl(item.number, item.ci_url, cols[1]);
  row += padRightUrl(item.sha_short, item.github_url, cols[2], item.message);
  // row += padRightUrl(item.artifact, item.artifact_url, cols[3]);
  if (item.ref_url != null) {
    row += padRightUrl(item.ref, item.ref_url, cols[3]);
  } else {
    row += padRight(item.ref, cols[3]);
  }
  // artifact name is now a glyph so don't risk truncating it
  row += `<a href="${item.artifact_url}">${item.artifact}</a>`;
  // row += '  ';
  return row;
}

function padRight(padString, length) {
  var str = String(padString).slice(0, length-3);
  if (padString.length > str.length) {
    str += '...';
  }
  while (str.length < length) {
    str = str + ' ';
  }
  return str;
}

function padRightUrl(padString, padUrl, length, title) {
  var str = String(padString).slice(0, length-3);
  if (padString.length > str.length) {
    str += '...';
  }
  var len = str.length;
  if (title) {
    title = ' title="' + title + '" ';
  }
  else {
    title = '';
  }
  str = '<a href="' + padUrl + '"' + title + '>' + str + '</a>'
  while (len < length) {
    str = str + ' ';
    len++;
  }
  return str;
}
