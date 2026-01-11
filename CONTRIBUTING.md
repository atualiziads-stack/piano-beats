# 🤝 Contribuindo para Piano Beats

Obrigado por se interessar em contribuir para o Piano Beats! Este documento fornece diretrizes e instruções para contribuir.

## 📋 Código de Conduta

Esperamos que todos os contribuidores mantenham um ambiente respeitoso e inclusivo.

## 🐛 Reportando Bugs

Se encontrou um bug:

1. Verifique se o bug já foi reportado em [Issues](https://github.com/atualiziads-stack/piano-beats/issues)
2. Se não, crie uma nova issue com:
   - Título descritivo
   - Descrição detalhada
   - Passos para reproduzir
   - Comportamento esperado vs observado
   - Screenshots (se aplicável)

## 🚀 Sugerindo Melhorias

Para sugerir melhorias:

1. Abra uma issue com o label `enhancement`
2. Descreva claramente o recurso e o benefício
3. Forneça exemplos práticos se possível

## 💻 Desenvolvendo

### Setup Inicial

```bash
# Clone o repositório
git clone https://github.com/atualiziads-stack/piano-beats.git
cd piano-beats

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

### Criando um Pull Request

1. Crie uma branch: `git checkout -b feature/sua-feature`
2. Faça suas alterações
3. Commit: `git commit -am 'Adiciona nova feature'`
4. Push: `git push origin feature/sua-feature`
5. Abra um Pull Request descrevendo as mudanças

### Padrões de Código

- Use TypeScript
- Componentes devem ser nomeados em PascalCase
- Funções em camelCase
- Siga as convenções do projeto
- Adicione comentários para lógica complexa

### Testing

```bash
# Executar testes
npm test

# Com coverage
npm test -- --coverage
```

## 📝 Commit Message Guidelines

- Use o presente: "Adiciona feature" não "Adicionou feature"
- Primeira linha com max 50 caracteres
- Use imperativo: "Move cursor para..." não "Moved cursor..."
- Referencie issues: "Fix #123"

## ✅ Checklist Antes de Submeter PR

- [ ] Código segue o estilo do projeto
- [ ] Atualizou documentação relevante
- [ ] Adicionou testes (se aplicável)
- [ ] Commits têm mensagens descritivas
- [ ] Nenhum console.log deixado

## 📚 Recursos

- [Documentação React Native](https://reactnative.dev)
- [Documentação Expo](https://docs.expo.dev)
- [Tone.js Documentation](https://tonejs.org)

---

Obrigado por contribuir! 🎉