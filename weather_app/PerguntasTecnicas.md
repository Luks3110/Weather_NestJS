# Perguntas Técnicas

## 1. Quanto tempo você usou para completar a solução apresentada? O que você faria se tivesse mais tempo?
- Usei 1 dia para pensar na melhor forma de implementar(trabalho paralelo) escolhi implementar a solução usando o arquivo JSON city.list.json.gz(que pode ser encontrado aqui: http://bulk.openweathermap.org/sample/) num banco de dados NoSQL(para performance), para buscar pelos dados da cidade inequivocadamente.
- Iria terminar os testes unitários e os de integração, não soube lidar com observables nos testes. Caso tivesse sido solicitado iria implementar um front-end com Vue.js, mas como não estava no escopo do projeto decidi não fazer.

## 2. Se usou algum framework, qual foi o motivo de ter usado este? Caso contrário, por que não utilizou nenhum?
- NestJS é um framework de Node.js progressivo que oferece uma camada à mais de abstração, além de sanar um problema inerente do Node.js que é sua arquitetura. Além de disponibilizar recursos que fazem ele ser parecido com Angular, muito voltado à templates, insere conceitos como injeção de dependências, inversão de dependências e diveras ferramentas que possibilitam uma experiência de desenvolvedor focada na missão crítica enquanto o framework facilita o desenvolvimento com Decorators e uma série de ferramenta que evitam muito boilerplate e repetição no código. NestJS também oferece recursos que combinam programação funcional e programação reativa, como o RxJs que vem com o framework. Ele usa o Express.js como framework para HTTP servers.
