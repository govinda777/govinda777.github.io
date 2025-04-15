# Instruções para o Site com Jekyll

Este site agora utiliza Jekyll para facilitar a manutenção e permitir a divisão do conteúdo em arquivos menores.

## Estrutura de Diretórios

```
- _includes/        # Componentes e seções individuais
- _layouts/         # Templates de layout 
- _sass/           # Arquivos SASS (se necessário)
- _posts/          # Posts do blog (se necessário)
- assets/          # CSS, JavaScript e imagens
  - css/
  - js/
  - img/
- index.html       # Home page com front matter
- _config.yml      # Configuração do Jekyll
- Gemfile          # Dependências Ruby/Jekyll
```

## Instalação Local

1. Instale Ruby (caso ainda não tenha):
   - Para macOS: `brew install ruby` ou use o Ruby já instalado
   - Para Windows: Use RubyInstaller (https://rubyinstaller.org/)
   - Para Linux: `sudo apt-get install ruby-full`

2. Instale o Bundler e o Jekyll:
   ```
   gem install bundler jekyll
   ```

3. Na pasta do projeto, execute:
   ```
   bundle install
   ```

4. Para iniciar o servidor local:
   ```
   bundle exec jekyll serve
   ```

5. Acesse o site em `http://localhost:4000`

## Como Adicionar Novas Seções

1. Crie um novo arquivo em `_includes/` com o nome `seção-section.html`
2. Adicione o HTML da seção neste arquivo
3. Inclua a seção em `index.html` com:
   ```
   {% include seção-section.html %}
   ```

## Deployment no GitHub Pages

O GitHub Pages tem suporte nativo a Jekyll. Para usar:

1. Certifique-se que seu repositório tenha o nome `username.github.io`
2. Para publicação, apenas faça um commit e push para o branch main:
   ```
   git add .
   git commit -m "Atualização do site"
   git push origin main
   ```

3. GitHub Pages irá automaticamente construir o site Jekyll

## Configuração para GitHub Pages

Se você quiser usar plugins suportados pelo GitHub Pages, edite o Gemfile:

1. Comente as linhas:
   ```ruby
   gem "jekyll", "~> 4.2.0"
   gem "jekyll-feed", "~> 0.12"
   ```

2. E descomente:
   ```ruby
   gem "github-pages", group: :jekyll_plugins
   gem "jekyll-feed", "~> 0.12", group: :jekyll_plugins
   ```

## Recursos

- [Documentação Jekyll](https://jekyllrb.com/docs/)
- [GitHub Pages + Jekyll](https://docs.github.com/pt/pages/setting-up-a-github-pages-site-with-jekyll)
- [Temas Jekyll](https://jekyllthemes.io/) 