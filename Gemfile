source "https://rubygems.org"

gem "jekyll", "~> 3.9.0"  # Versão mais antiga e estável
gem "webrick", "~> 1.7"
gem "kramdown-parser-gfm"
gem "jekyll-feed", "~> 0.15.1"

# Explicitamente substituir o conversor sass
gem "jekyll-sass-converter", "1.5.2"  # Versão mais antiga e estável

# Para GitHub Pages
# gem "github-pages", group: :jekyll_plugins

# Windows e JRuby não incluem zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster para Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]