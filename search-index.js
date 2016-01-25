var searchIndex = {};
searchIndex['tempdir'] = {"items":[[3,"TempDir","tempdir","A wrapper for a path to temporary directory implementing automatic\nscope-based deletion.",null,null],[11,"new_in","","Attempts to make a temporary directory inside of `tmpdir` whose name\nwill have the prefix `prefix`. The directory will be automatically\ndeleted once the returned wrapper is destroyed.",0,{"inputs":[{"name":"tempdir"},{"name":"p"},{"name":"str"}],"output":{"name":"result"}}],[11,"new","","Attempts to make a temporary directory inside of `env::temp_dir()` whose\nname will have the prefix `prefix`. The directory will be automatically\ndeleted once the returned wrapper is destroyed.",0,{"inputs":[{"name":"tempdir"},{"name":"str"}],"output":{"name":"result"}}],[11,"into_path","","Unwrap the wrapped `std::path::Path` from the `TempDir` wrapper.\nThis discards the wrapper so that the automatic deletion of the\ntemporary directory is prevented.",0,{"inputs":[{"name":"tempdir"}],"output":{"name":"pathbuf"}}],[11,"path","","Access the wrapped `std::path::Path` to the temporary directory.",0,{"inputs":[{"name":"tempdir"}],"output":{"name":"path"}}],[11,"close","","Close and remove the temporary directory",0,{"inputs":[{"name":"tempdir"}],"output":{"name":"result"}}],[11,"drop","","",0,{"inputs":[{"name":"tempdir"}],"output":null}]],"paths":[[3,"TempDir"]]};
initSearch(searchIndex);
