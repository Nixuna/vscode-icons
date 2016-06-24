exports.extensions = {
  supported: [
    { icon: "actionscript", extensions: ["as"] },
    { icon: "angular", extensions: [] },
    { icon: "apache", extensions: [] },
    { icon: "applescript", extensions: ["app"] },
    { icon: "autohotkey", extensions: ["ahk"] },
    { icon: "babel", extensions: ["babelrc"] },
    { icon: "binary", extensions: ["bin"] }, // http://www.file-extensions.org/filetype/extension/name/binary-files
    { icon: "blade", extensions: [] },
    { icon: "bower", extensions: ["bowerrc"] },
    { icon: "c", extensions: ["c"] },
    { icon: "cheader", extensions: ["h"] },
    { icon: "c++", extensions: ["cpp"] },
    { icon: "cake", extensions: ["cake"] },
    { icon: "cfm", extensions: ["cfm", "cfc", "lucee"] },
    { icon: "clojure", extensions: ["clojure", "cjm"] },
    { icon: "coffescript", extensions: ["coffee"] },
    { icon: "config", extensions: ["env"] },
    { icon: "compass", extensions: [] },
    { icon: "cs", extensions: ["cs"] },
    { icon: "css", extensions: ["css"] },
    { icon: "dlang", extensions: ["d"] },
    { icon: "docker", extensions: ["dockerfile"] },
    { icon: "editorconfig", extensions: ["editorconfig"] },
    { icon: "erlang", extensions: ["erl", "hrl", "emakefile", "emakerfile"] },
    { icon: "eslint", extensions: ["eslintrc", "eslintignore"] },
    { icon: "favicon", extensions: ["favicon"], special: "ico" },
    { icon: "font", extensions: ["woff", "woff2", "ttf"] },
    { icon: "fsharp", extensions: ["fs", "fsx", "fsi"] },
    { icon: "git", extensions: ["gitattributes", "gitignore", "gitmodules"] },
    { icon: "go", extensions: ["go"] },
    { icon: "gradle", extensions: ["gradle"] },
    { icon: "graphviz", extensions: [] },
    { icon: "groovy", extensions: [] },
    { icon: "gruntfile", extensions: ["gruntfile"], special: "js" },
    { icon: "gulpfile", extensions: ["gulpfile"], special: "js" },
    { icon: "haml", extensions: ["haml"] },
    { icon: "handlebars", extensions: ["hbs", "handlebars"] },
    { icon: "haskell", extensions: ["has", "hs", "lhs", "lit", "gf"] },
    { icon: "haxe", extensions: ["hxml"] },
    { icon: "html", extensions: ["html", "html"] },
    { icon: "image", extensions: ["jpeg", "jpg", "gif", "png", "bmp"] },
    { icon: "jade", extensions: ["jade", "pug"] },
    { icon: "java", extensions: ["java"] },
    { icon: "js", extensions: ["js"] },
    { icon: "jsp", extensions: ["jsp"] },
    { icon: "julia", extensions: ["jl"] },
    { icon: "log", extensions: ["log"] },
    { icon: "less", extensions: ["less"] },
    { icon: "license", extensions: ["license"] },
    { icon: "lisp", extensions: ["bil"] },
    { icon: "lsl", extensions: ["lsl"] },
    { icon: "lua", extensions: ["lua"] },
    { icon: "markdown", extensions: ["md"] },
    { icon: "markup", extensions: [] },
    { icon: "matlab", extensions: ["m", "fig", "mat", "mex", "mexn", "mexrs6", "mn", "mum", "mx", "mx3", "rwd", "slx", "slddc", "smv", "tikz", "xvc", "xvc"] },
    { icon: "mustache", extensions: ["mustache", "mst"] },
    { icon: "nim", extensions: ["nim", "nims", "cfg"] },
    { icon: "node", extensions: ["json"] },
    { icon: "npm", extensions: ["npmignore"]},
    { icon: "ocaml", extensions: ["cma", "cmi", "ml", "mly", "ocamlmakefile"] },
    { icon: "perl", extensions: ["perl"] },
    { icon: "php", extensions: ["php", "php1", "php2", "php3", "php4", "php5", "php6", "phps", "phpsa", "phpt"] },
    { icon: "procfile", extensions: ["procfile"] },
    { icon: "powershell", extensions: ["ps1", "psm1", "psd1"] },
    { icon: "puppet", extensions: ["epp"] },
    { icon: "python", extensions: ["py"] },
    { icon: "r", extensions: ["r"] },
    { icon: "rails", extensions: [] },
    { icon: "reactjs", extensions: ["jsx"] },
    { icon: "reactts", extensions: ["tsx"] },
    { icon: "ruby", extensions: ["rb"] },
    { icon: "rust", extensions: ["rs"] },
    { icon: "sass", extensions: ["sass"] },
    { icon: "scala", extensions: ["scala"] },
    { icon: "scss", extensions: ["scss"] },
    { icon: "settings", extensions: [] },
    { icon: "shell", extensions: ["bat", "sh", "cmd", "bash"] },
    { icon: "slim", extensions: [] },
    { icon: "source", extensions: [] },
    { icon: "sql", extensions: ["sql"] },
    { icon: "stylelint", extensions: ["stylelintrc"] },
    { icon: "stylelint", extensions: ["stylelint.config"], special: "js" },
    { icon: "stylus", extensions: ["styl"] },
    { icon: "svg", extensions: ["svg"] },
    { icon: "swift", extensions: ["swift"] },
    { icon: "tcl", extensions: ["tcl"] },
    { icon: "tex", extensions: ["texi"] },
    { icon: "text", extensions: ["txt"] },
    { icon: "textile", extensions: ["textile"] },
    { icon: "twig", extensions: ["twig"] },
    { icon: "typescript", extensions: ["ts"] },
    { icon: "vue", extensions: ["vue"] },
    { icon: "vscode", extensions: ["vscodeignore", "launch", "jsconfig", "tsconfig"], special: "json" },
    { icon: "xml", extensions: ["xml", "axml", "xaml"] },
    { icon: "yaml", extensions: ["yml", "yaml"] },
    { icon: "zip", extensions: ["zip", "rar", "7z"] }
  ],
  "parse": function(){
    if((/^\d/).test(this)) return 'n' + this;
    return this;
  }
};
