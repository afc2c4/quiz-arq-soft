
import { Question } from './types';

export const QUIZ_DATABASE: Question[] = [
  // --- SQL vs NoSQL (5 Questões) ---
  {
    id: 'sql1',
    topic: 'SQL vs NoSQL',
    question: 'Qual a principal diferença na estrutura de dados entre SQL e NoSQL?',
    options: [
      'SQL usa tabelas relacionais com esquemas fixos; NoSQL permite esquemas flexíveis (documentos, grafos, etc).',
      'SQL é apenas para dados numéricos; NoSQL é para texto.',
      'SQL não suporta transações; NoSQL é focado em ACID.',
      'SQL é sempre mais rápido que NoSQL em qualquer cenário.',
      'NoSQL é uma linguagem de programação, enquanto SQL é um banco de dados.'
    ],
    correctAnswer: 0,
    explanation: 'Bancos SQL são relacionais e exigem um esquema pré-definido. Bancos NoSQL são não-relacionais e oferecem flexibilidade para diferentes formatos de dados.'
  },
  {
    id: 'sql2',
    topic: 'SQL vs NoSQL',
    question: 'O que significa o termo "Escalabilidade Horizontal" no contexto de NoSQL?',
    options: [
      'Aumentar o poder de processamento (CPU/RAM) de um único servidor.',
      'Adicionar mais servidores ao cluster para distribuir a carga de dados.',
      'Mudar o banco de dados de local para a nuvem.',
      'Reduzir o tamanho das tabelas para economizar espaço.',
      'Converter todas as tabelas em arquivos CSV.'
    ],
    correctAnswer: 1,
    explanation: 'Escalabilidade horizontal (scale-out) é a capacidade de adicionar mais máquinas ao sistema, uma característica forte de muitos bancos NoSQL.'
  },
  {
    id: 'sql3',
    topic: 'SQL vs NoSQL',
    question: 'Qual propriedade é garantida por bancos SQL tradicionais através do acrônimo ACID?',
    options: [
      'Agilidade, Conectividade, Inteligência e Disponibilidade.',
      'Atomicidade, Consistência, Isolamento e Durabilidade.',
      'Acesso, Controle, Integração e Desempenho.',
      'Algoritmo, Código, Interface e Dados.',
      'Apenas Consistência e Disponibilidade.'
    ],
    correctAnswer: 1,
    explanation: 'ACID garante que as transações de banco de dados sejam processadas de forma confiável.'
  },
  {
    id: 'sql4',
    topic: 'SQL vs NoSQL',
    question: 'Em qual cenário um banco SQL é geralmente preferível a um NoSQL?',
    options: [
      'Quando os dados são altamente não estruturados e mudam constantemente.',
      'Quando há necessidade de consultas complexas com múltiplos JOINs e integridade referencial rigorosa.',
      'Quando o volume de dados é massivo e exige escrita em milissegundos em escala global.',
      'Para armazenar logs simples de sensores IoT sem relação entre si.',
      'Quando não se sabe qual será a estrutura dos dados no futuro.'
    ],
    correctAnswer: 1,
    explanation: 'SQL brilha em cenários onde a consistência e as relações complexas entre dados são fundamentais.'
  },
  {
    id: 'sql5',
    topic: 'SQL vs NoSQL',
    question: 'O Teorema CAP afirma que um sistema distribuído pode garantir apenas duas de três propriedades. Quais são elas?',
    options: [
      'Custo, Agilidade e Performance.',
      'Consistência, Disponibilidade e Tolerância a Partições.',
      'Capacidade, Acesso e Protocolo.',
      'Código, Arquitetura e Processamento.',
      'Conexão, Autenticação e Permissão.'
    ],
    correctAnswer: 1,
    explanation: 'O Teorema CAP (Consistency, Availability, Partition Tolerance) é fundamental para entender as escolhas em bancos NoSQL distribuídos.'
  },

  // --- Banco de Documentos (5 Questões) ---
  {
    id: 'doc1',
    topic: 'Banco de Documentos',
    question: 'Qual o formato de armazenamento mais comum em bancos de documentos como o MongoDB?',
    options: [
      'Tabelas e Colunas.',
      'JSON ou BSON (Binary JSON).',
      'Arquivos de texto simples (.txt).',
      'Planilhas Excel.',
      'Código binário proprietário ilegível.'
    ],
    correctAnswer: 1,
    explanation: 'Bancos de documentos armazenam dados em estruturas flexíveis semelhantes a objetos, geralmente JSON ou variações como BSON.'
  },
  {
    id: 'doc2',
    topic: 'Banco de Documentos',
    question: 'O que caracteriza a natureza "Schema-less" de um banco de documentos?',
    options: [
      'O banco não permite criar índices.',
      'Documentos na mesma coleção podem ter campos e estruturas diferentes.',
      'O banco não suporta nenhum tipo de consulta.',
      'É obrigatório definir todos os campos antes de inserir o primeiro dado.',
      'Os dados são salvos sem nenhuma organização lógica.'
    ],
    correctAnswer: 1,
    explanation: 'Diferente do SQL, você não precisa definir uma estrutura rígida antes de inserir dados; cada documento pode ser único.'
  },
  {
    id: 'doc3',
    topic: 'Banco de Documentos',
    question: 'Qual a principal vantagem de "Embutir" (Embedding) documentos em vez de usar referências?',
    options: [
      'Aumenta o tamanho do banco de dados desnecessariamente.',
      'Melhora a performance de leitura ao evitar "joins" manuais na aplicação.',
      'Torna o banco de dados relacional.',
      'Impede que os dados sejam deletados.',
      'Facilita a criação de triggers complexos.'
    ],
    correctAnswer: 1,
    explanation: 'Embutir dados relacionados em um único documento permite recuperar todas as informações necessárias em uma única operação de I/O.'
  },
  {
    id: 'doc4',
    topic: 'Banco de Documentos',
    question: 'Bancos de documentos são ideais para qual tipo de aplicação?',
    options: [
      'Sistemas financeiros que exigem transações ACID multi-tabela rigorosas.',
      'Catálogos de produtos, perfis de usuários e sistemas de gerenciamento de conteúdo (CMS).',
      'Análise de redes sociais complexas com milhões de conexões entre pessoas.',
      'Sistemas de arquivos de baixo nível para sistemas operacionais.',
      'Apenas para cache temporário de curto prazo.'
    ],
    correctAnswer: 1,
    explanation: 'A flexibilidade de documentos é perfeita para dados que podem variar de item para item, como atributos de produtos.'
  },
  {
    id: 'doc5',
    topic: 'Banco de Documentos',
    question: 'O que é uma "Coleção" (Collection) em um banco de documentos?',
    options: [
      'Um conjunto de servidores em cluster.',
      'Um agrupamento de documentos, análogo a uma tabela no SQL.',
      'Um índice de busca rápida.',
      'Um backup de segurança.',
      'Uma linguagem de consulta específica.'
    ],
    correctAnswer: 1,
    explanation: 'Coleções agrupam documentos relacionados, embora não imponham um esquema rígido a eles.'
  },
  {
    id: 'doc6',
    topic: 'Banco de Documentos',
    question: 'A principal vantagem dos Bancos de Dados de Documentos em relação à experiência do desenvolvedor está em:',
    options: [
      'A linguagem SQL ser padronizada para a manipulação de documentos complexos.',
      'Utilizar JSON como formato nativo, o que se alinha à linguagem dos desenvolvedores.',
      'Exigir a criação de um esquema rígido antes da inserção de qualquer dado novo.',
      'Sua total dependência de joins complexos para a recuperação de informações úteis.',
      'A necessidade de tradução complexa entre objetos da aplicação e tabelas do banco.'
    ],
    correctAnswer: 1,
    explanation: 'Ao usar JSON, o banco de dados armazena os dados no mesmo formato que os desenvolvedores usam em seus códigos, eliminando a barreira de tradução.'
  },
  {
    id: 'doc7',
    topic: 'Banco de Documentos',
    question: 'O modelo de documentos é especialmente vantajoso em ambientes de desenvolvimento ágil devido à sua característica de:',
    options: [
      'Manter o esquema do banco de dados estático e imutável ao longo do tempo de vida.',
      'Brilhar em cenários onde a velocidade é sacrificada pela consistência extrema total.',
      'Permitir que o esquema do banco acompanhe as rápidas mudanças nos requisitos do código.',
      'Aumentar a complexidade da tradução de objetos complexos para o banco de dados.',
      'Exigir a normalização rigorosa dos dados em várias tabelas para evitar redundância.'
    ],
    correctAnswer: 2,
    explanation: 'A flexibilidade de esquema permite que a estrutura dos dados evolua junto com a aplicação, sem a necessidade de migrações de banco de dados custosas.'
  },
  {
    id: 'doc8',
    topic: 'Banco de Documentos',
    question: 'Qual aspecto do modelo de Documentos é apontado como chave para a inovação rápida?',
    options: [
      'A rigidez estrita do esquema que impede alterações acidentais nos dados salvos.',
      'A total ausência de índices que simplifica a manutenção do servidor de banco.',
      'A dependência de transações distribuídas complexas entre múltiplos nós de rede.',
      'A flexibilidade na estrutura de dados que permite armazenar diversos formatos.',
      'O uso exclusivo de linguagens de consulta procedurais para manipulação de dados.'
    ],
    correctAnswer: 3,
    explanation: 'A capacidade de armazenar dados sem um esquema pré-definido permite que novas funcionalidades sejam implementadas sem alterar a estrutura do banco.'
  },
  {
    id: 'doc9',
    topic: 'Banco de Documentos',
    question: 'O uso de JSON em Bancos de Dados de Documentos visa eliminar qual complexidade comum em bancos relacionais?',
    options: [
      'A necessidade de um esquema de tabelas bem definido para cada tipo de dado novo.',
      'A eliminação de todos os tipos de chaves primárias e estrangeiras do sistema.',
      'A tradução complexa entre a representação de objetos e o modelo de tabelas.',
      'A manutenção de backups de dados em ambientes de produção de alta escala.',
      'A dificuldade de instalar o sistema gerenciador de banco de dados no servidor.'
    ],
    correctAnswer: 2,
    explanation: 'O "Impedance Mismatch" é resolvido quando o banco armazena os dados de forma semelhante à estrutura de objetos usada na programação.'
  },
  {
    id: 'doc10',
    topic: 'Banco de Documentos',
    question: 'Para o engenheiro de software moderno que trabalha com Bancos de Dados de Documentos, qual habilidade é mandatória?',
    options: [
      'A manipulação avançada de procedimentos armazenados do tipo Stored Procedures.',
      'O domínio de modelagem de dados exclusivamente relacional para todos os casos.',
      'A capacidade de modelar dados usando o formato JSON de maneira eficiente.',
      'A experiência em tuning de queries SQL complexas com múltiplos níveis de join.',
      'A criação de triggers e views em ambientes distribuídos de alta disponibilidade.'
    ],
    correctAnswer: 2,
    explanation: 'Como o JSON é o formato central, saber como estruturar documentos para performance e flexibilidade é essencial para o desenvolvedor.'
  },
  {
    id: 'doc11',
    topic: 'Banco de Documentos',
    question: 'Em um Banco de Dados de Documentos, uma unidade básica de armazenamento de dados é tipicamente:',
    options: [
      'Uma tupla em uma tabela normalizada seguindo as regras de integridade rígida.',
      'Um documento que contém todos os dados relacionados em uma única estrutura.',
      'Um bloco de disco de tamanho fixo que armazena registros binários compactos.',
      'Um registro espalhado por múltiplas tabelas que exige junções para ser lido.',
      'Um índice B-tree sem dados associados que serve apenas para busca de chaves.'
    ],
    correctAnswer: 1,
    explanation: 'O documento é a unidade atômica, permitindo que informações relacionadas sejam mantidas juntas, o que otimiza o acesso aos dados.'
  },
  {
    id: 'doc12',
    topic: 'Banco de Documentos',
    question: 'Diferente dos bancos relacionais tradicionais, o Document Database geralmente possui:',
    options: [
      'Schema-on-Write rígido que valida todos os campos antes da gravação no disco.',
      'Um modelo sem esquema rígido ou com esquema flexível para os documentos.',
      'Um único e obrigatório índice clusterizado que define a ordem física dos dados.',
      'Apenas a capacidade de armazenar texto simples sem suporte a tipos complexos.',
      'A necessidade de pré-definição de todas as chaves estrangeiras do sistema.'
    ],
    correctAnswer: 1,
    explanation: 'A ausência de um esquema fixo (schema-less) é o que dá aos bancos de documentos sua característica flexibilidade e agilidade.'
  },
  {
    id: 'doc13',
    topic: 'Banco de Documentos',
    question: 'A menção a requisitos que mudam toda semana sugere que o modelo de documentos se adapta melhor a:',
    options: [
      'Projetos com requisitos muito estáveis e maduros que não sofrem alterações.',
      'Cenários onde a agilidade na alteração da estrutura de dados é importante.',
      'Aplicações que só permitem a leitura de dados sem necessidade de atualização.',
      'Estruturas de banco de dados que demoram muito para serem alteradas no disco.',
      'Sistemas legados com esquemas totalmente normalizados em várias tabelas.'
    ],
    correctAnswer: 1,
    explanation: 'Em metodologias ágeis, a capacidade de mudar o modelo de dados rapidamente sem quebrar o sistema é uma vantagem competitiva enorme.'
  },
  {
    id: 'doc14',
    topic: 'Banco de Documentos',
    question: 'O que significa o Document Database falar a língua dos desenvolvedores JSON?',
    options: [
      'Exige que toda a aplicação seja escrita em JavaScript para funcionar no banco.',
      'Indica que a estrutura de dados no banco é semelhante à estrutura de objetos.',
      'Significa que apenas dados de texto podem ser armazenados no servidor de dados.',
      'Implica que não é necessário nenhum tipo de servidor de banco de dados local.',
      'Que a comunicação é feita exclusivamente por chamadas RPC de baixo nível.'
    ],
    correctAnswer: 1,
    explanation: 'Isso significa que a representação mental do desenvolvedor sobre os dados coincide com a forma como o banco os armazena e recupera.'
  },
  {
    id: 'doc15',
    topic: 'Banco de Documentos',
    question: 'A flexibilidade do modelo de Documentos é um fator chave para a inovação rápida porque:',
    options: [
      'Impede totalmente a evolução do esquema de dados ao longo do tempo de uso.',
      'Exige um tempo de inatividade maior para qualquer alteração na estrutura base.',
      'Facilita a adaptação do banco a novas funcionalidades sem grandes refatorações.',
      'Limita o tamanho dos documentos a um valor muito pequeno para economizar RAM.',
      'Torna a consistência eventual uma regra absoluta e imutável para todo o sistema.'
    ],
    correctAnswer: 2,
    explanation: 'Novos campos podem ser adicionados a documentos individuais sem afetar o restante da coleção, permitindo iterações rápidas no produto.'
  },

  // --- Banco de Chave-Valor (5 Questões) ---
  {
    id: 'kv1',
    topic: 'Banco de Chave-Valor',
    question: 'Qual a principal característica de um banco de dados Chave-Valor como o Redis?',
    options: [
      'Armazena dados em tabelas complexas com chaves estrangeiras.',
      'Associa uma chave única a um valor específico, funcionando como um dicionário gigante.',
      'É usado apenas para armazenar imagens e vídeos.',
      'Exige consultas SQL complexas para recuperar qualquer dado.',
      'Não permite atualizações de dados após a inserção.'
    ],
    correctAnswer: 1,
    explanation: 'É o modelo NoSQL mais simples, onde você recupera um valor fornecendo sua chave correspondente.'
  },
  {
    id: 'kv2',
    topic: 'Banco de Chave-Valor',
    question: 'Bancos de Chave-Valor são frequentemente utilizados para:',
    options: [
      'Consultas analíticas complexas de BI.',
      'Gerenciamento de sessões, cache e carrinhos de compras.',
      'Armazenamento de longo prazo de registros históricos imutáveis.',
      'Substituir completamente bancos relacionais em sistemas ERP.',
      'Desenvolvimento de jogos 3D no lado do servidor.'
    ],
    correctAnswer: 1,
    explanation: 'Devido à sua extrema velocidade de leitura e escrita, são perfeitos para dados temporários ou de acesso rápido.'
  },
  {
    id: 'kv3',
    topic: 'Banco de Chave-Valor',
    question: 'O que significa um banco de dados ser "In-Memory"?',
    options: [
      'Ele armazena dados apenas no cérebro do desenvolvedor.',
      'Os dados residem principalmente na memória RAM para acesso ultra-rápido.',
      'O banco de dados esquece os dados assim que são lidos.',
      'Ele usa apenas memória virtual do Windows.',
      'Os dados são gravados em fitas magnéticas.'
    ],
    correctAnswer: 1,
    explanation: 'Armazenar em RAM elimina a latência de busca em disco, tornando bancos como Redis extremamente performáticos.'
  },
  {
    id: 'kv4',
    topic: 'Banco de Chave-Valor',
    question: 'Qual a limitação de bancos de Chave-Valor puros?',
    options: [
      'Não suportam chaves com mais de 10 caracteres.',
      'Dificuldade em realizar consultas baseadas nos valores (sem conhecer a chave).',
      'São muito lentos para operações de escrita.',
      'Não podem ser instalados em servidores Linux.',
      'Exigem hardware proprietário caro.'
    ],
    correctAnswer: 1,
    explanation: 'Se você não tem a chave, buscar por um atributo dentro do valor geralmente exige percorrer todos os registros.'
  },
  {
    id: 'kv5',
    topic: 'Banco de Chave-Valor',
    question: 'O recurso "TTL" (Time To Live) em bancos de Chave-Valor serve para:',
    options: [
      'Medir o tempo que o servidor está ligado.',
      'Definir um tempo de expiração para que o dado seja deletado automaticamente.',
      'Aumentar a vida útil do disco rígido.',
      'Limitar o número de usuários conectados.',
      'Calcular a velocidade da rede.'
    ],
    correctAnswer: 1,
    explanation: 'TTL é essencial para gerenciar cache, garantindo que dados obsoletos sejam removidos automaticamente.'
  },
  {
    id: 'kv6',
    topic: 'Banco de Chave-Valor',
    question: 'Qual é a principal característica que distingue a classe de bancos de dados NoSQL em relação aos bancos de dados tradicionais?',
    options: [
      'Adoção de uma estrutura rígida para definição de colunas e tipos de dados.',
      'Foco exclusivo em operações de JOINs complexos para a consulta de dados.',
      'Design projetado para modelos de dados específicos e quebra da rigidez de tabelas.',
      'Utilização obrigatória de uma Primary Key indexada em estrutura de B-Tree.',
      'Impossibilidade técnica de armazenar dados estruturados no formato JSON.'
    ],
    correctAnswer: 2,
    explanation: 'Bancos NoSQL são projetados para modelos de dados específicos e oferecem esquemas flexíveis, ao contrário da estrutura de tabelas rígida dos RDBMS.'
  },
  {
    id: 'kv7',
    topic: 'Banco de Chave-Valor',
    question: 'Em um registro de Banco de Dados Chave-Valor, o que a Chave tipicamente representa?',
    options: [
      'Uma coleção de documentos JSON que armazena múltiplos atributos de uma entidade de domínio.',
      'O dado associado que pode ser um binário complexo, uma string ou um objeto serializado.',
      'Uma Foreign Key que estabelece uma relação direta e rígida com um banco de dados relacional.',
      'O identificador único que funciona como uma Primary Key indexada em uma Hash Table global.',
      'Um conjunto de índices secundários que permitem buscas eficientes por atributos não-chave.'
    ],
    correctAnswer: 3,
    explanation: 'Em um armazenamento Chave-Valor, a chave é o identificador único usado para recuperar o valor associado, geralmente implementado com tabelas hash para acesso O(1).'
  },
  {
    id: 'kv8',
    topic: 'Banco de Chave-Valor',
    question: 'Em sistemas de alta escala, por que a latência no carregamento de dados é considerada um fator crítico para a receita?',
    options: [
      'Atrasos garantem a consistência imediata dos dados em todas as réplicas do sistema.',
      'Milissegundos de atraso são considerados irrelevantes em ambientes de alta disponibilidade.',
      'Atrasos no carregamento tendem a aumentar o abandono do carrinho e reduzir a conversão de vendas.',
      'Latência alta permite a replicação síncrona global entre diferentes regiões geográficas.',
      'Somente bancos de dados relacionais são afetados negativamente pela latência de rede.'
    ],
    correctAnswer: 2,
    explanation: 'A alta latência impacta negativamente a experiência do usuário, levando a taxas de conversão mais baixas e perda de receita em aplicações de alto tráfego.'
  },
  {
    id: 'kv9',
    topic: 'Banco de Chave-Valor',
    question: 'Qual é a principal implicação do conceito Acesso Pattern-Driven no design de Bancos de Dados Chave-Valor simples?',
    options: [
      'O banco é desenhado priorizando a forma como os dados serão guardados fisicamente no disco rígido para otimizar o espaço.',
      'Consultas complexas como filtros por atributos variados são nativamente eficientes sem a necessidade de chaves primárias.',
      'A indexação de todos os campos é feita de forma totalmente automática sem qualquer necessidade de intervenção do desenvolvedor.',
      'O banco é desenhado pensando em como os dados serão lidos e requer a criação de índices manuais para pesquisas não diretas.',
      'A ausência de cláusulas WHERE permite a execução de JOINs complexos e performáticos entre diferentes chaves únicas do sistema.'
    ],
    correctAnswer: 3,
    explanation: 'Bancos Chave-Valor exigem que você modele seus dados com base em como irá consultá-los, pois não suportam consultas complexas arbitrárias nativamente.'
  },
  {
    id: 'kv10',
    topic: 'Banco de Chave-Valor',
    question: 'Qual protocolo de conexão é a tendência no modelo Serverless e é fácil de usar com firewalls e funções Lambda?',
    options: [
      'Conexão TCP Persistente.',
      'WebSockets bi-direcionais.',
      'Protocolo REST / HTTP.',
      'Protocolo binário nativo.',
      'Protocolo FTP Seguro.'
    ],
    correctAnswer: 2,
    explanation: 'REST/HTTP é stateless e amigável a firewalls, sendo ideal para ambientes serverless onde conexões persistentes são difíceis de gerenciar.'
  },
  {
    id: 'kv11',
    topic: 'Banco de Chave-Valor',
    question: 'Qual prática é obrigatória para garantir que os dados trafeguem criptografados entre a Aplicação e o Banco na Nuvem?',
    options: [
      'Configuração de IP Allowlisting estático.',
      'Criptografia Encryption at Rest no disco.',
      'Criptografia TLS/SSL (Em Trânsito).',
      'Desativação da autenticação por usuário.',
      'Uso de containers com endereços IP dinâmicos.'
    ],
    correctAnswer: 2,
    explanation: 'A criptografia TLS/SSL garante que os dados estejam protegidos enquanto se movem entre a aplicação e o servidor de banco de dados pela rede.'
  },
  {
    id: 'kv12',
    topic: 'Banco de Chave-Valor',
    question: 'Qual produto é um Redis Serverless projetado para a era moderna com custo por request e conexão via API REST?',
    options: [
      'Serviço DynamoDB.',
      'Sistema Memcached.',
      'Serviço Redis Cloud.',
      'Banco Cosmos DB.',
      'Plataforma Upstash.'
    ],
    correctAnswer: 4,
    explanation: 'O Upstash fornece uma experiência Redis serverless com suporte a HTTP, otimizado especificamente para plataformas de computação em nuvem e edge.'
  },
  {
    id: 'kv13',
    topic: 'Banco de Chave-Valor',
    question: 'O Amazon DynamoDB foca em escala massiva e alta disponibilidade. Qual é a sua característica de modelo de dados?',
    options: [
      'Focado exclusivamente em strings simples.',
      'Multithreaded sem persistência de dados.',
      'Banco relacional com suporte a stored procedures.',
      'Chave-Valor com suporte a documentos JSON.',
      'Multimodelo com suporte nativo a grafos.'
    ],
    correctAnswer: 3,
    explanation: 'O DynamoDB é um banco NoSQL gerenciado que suporta modelos de dados chave-valor e documento, oferecendo alta escalabilidade e performance.'
  },
  {
    id: 'kv14',
    topic: 'Banco de Chave-Valor',
    question: 'Para implementar um Rate Limiting, qual combinação de dados é tipicamente usada no Redis?',
    options: [
      'Uso de Listas (Lists) com operações de Push/Pop para controle de fila.',
      'Uso de Sorted Sets (Conjuntos Ordenados) para ranking automático.',
      'Incremento Atômico de um contador (Strings) associado a um TTL (Time To Live).',
      'Uso de estrutura de Documentos JSON complexos para cada requisição.',
      'Uso de chaves binárias para armazenamento de arquivos de log grandes.'
    ],
    correctAnswer: 2,
    explanation: 'O limite de taxa é frequentemente implementado incrementando um contador para uma chave e definindo um tempo de expiração para essa chave.'
  },
  {
    id: 'kv15',
    topic: 'Banco de Chave-Valor',
    question: 'Qual das seguintes características é uma desvantagem inerente ao modelo Chave-Valor simples?',
    options: [
      'Baixa capacidade de escalabilidade horizontal em clusters.',
      'Latência de resposta na casa dos milissegundos.',
      'Suporte nativo a JOINs complexos entre tabelas.',
      'Necessidade de realizar relacionamentos via código na aplicação.',
      'Ineficiência para lidar com alto volume de leitura.'
    ],
    correctAnswer: 3,
    explanation: 'Como os bancos Chave-Valor não possuem suporte nativo para junções ou relacionamentos complexos, os desenvolvedores devem gerenciar isso na lógica da aplicação.'
  },

  // --- Banco de Coluna Larga (5 Questões) ---
  {
    id: 'wc1',
    topic: 'Banco de Coluna Larga',
    question: 'Qual a diferença fundamental entre bancos de Coluna Larga (Wide-Column) e bancos Relacionais?',
    options: [
      'Bancos relacionais armazenam dados em linhas; Coluna Larga armazena famílias de colunas dinâmicas.',
      'Coluna Larga não permite armazenar strings.',
      'Bancos relacionais são apenas para Linux; Coluna Larga apenas para Windows.',
      'Não há diferença, são apenas nomes diferentes para a mesma tecnologia.',
      'Coluna Larga é uma tecnologia obsoleta dos anos 70.'
    ],
    correctAnswer: 0,
    explanation: 'Bancos como Cassandra e HBase organizam dados em famílias de colunas, permitindo que cada linha tenha colunas diferentes.'
  },
  {
    id: 'wc2',
    topic: 'Banco de Coluna Larga',
    question: 'Para qual cenário o Apache Cassandra é especialmente recomendado?',
    options: [
      'Pequenas aplicações mobile com poucos usuários.',
      'Grandes volumes de dados distribuídos com alta disponibilidade e sem ponto único de falha.',
      'Sistemas que exigem muitos JOINs entre tabelas diferentes.',
      'Apenas para armazenamento de arquivos de imagem.',
      'Sistemas de contabilidade simples.'
    ],
    correctAnswer: 1,
    explanation: 'Cassandra foi projetado para lidar com cargas massivas de dados em múltiplos data centers.'
  },
  {
    id: 'wc3',
    topic: 'Banco de Coluna Larga',
    question: 'O que é uma "Column Family" (Família de Colunas)?',
    options: [
      'Um grupo de desenvolvedores que trabalham com SQL.',
      'Um container para colunas relacionadas, similar a uma tabela, mas muito mais flexível.',
      'Uma função que soma valores de uma coluna.',
      'Um tipo de backup incremental.',
      'Uma restrição de integridade referencial.'
    ],
    correctAnswer: 1,
    explanation: 'Famílias de colunas permitem agrupar dados que são frequentemente acessados juntos.'
  },
  {
    id: 'wc4',
    topic: 'Banco de Coluna Larga',
    question: 'Como é feita a escrita em bancos de Coluna Larga para garantir alta performance?',
    options: [
      'O banco espera o disco parar de girar para gravar.',
      'Usa estruturas como Memtables e Commit Logs para gravações sequenciais rápidas.',
      'Grava os dados em ordem alfabética.',
      'Envia os dados para um serviço de terceiros processar.',
      'A escrita é síncrona e bloqueia todos os outros usuários.'
    ],
    correctAnswer: 1,
    explanation: 'Estruturas como LSM-Trees permitem que a escrita seja extremamente rápida, sendo gravada primeiro em memória e log sequencial.'
  },
  {
    id: 'wc5',
    topic: 'Banco de Coluna Larga',
    question: 'Em bancos de Coluna Larga, o design do esquema deve ser baseado em:',
    options: [
      'Normalização de dados (3NF).',
      'As consultas (queries) que a aplicação irá realizar.',
      'A ordem alfabética dos campos.',
      'O tamanho dos arquivos no disco.',
      'A vontade do DBA.'
    ],
    correctAnswer: 1,
    explanation: 'Diferente do SQL, no NoSQL de Coluna Larga você modela os dados para atender especificamente às suas necessidades de leitura.'
  },

  // --- Banco de Grafos (5 Questões) ---
  {
    id: 'gr1',
    topic: 'Banco de Grafos',
    question: 'Quais são os dois elementos fundamentais de um banco de dados de Grafos?',
    options: [
      'Tabelas e Linhas.',
      'Nós (Nodes/Vertices) e Relacionamentos (Edges/Relationships).',
      'Chaves e Valores.',
      'Documentos e Coleções.',
      'Arquivos e Pastas.'
    ],
    correctAnswer: 1,
    explanation: 'Grafos focam nas conexões entre os dados. Nós representam entidades e Edges representam como elas se relacionam.'
  },
  {
    id: 'gr2',
    topic: 'Banco de Grafos',
    question: 'Qual a principal vantagem de usar um banco de Grafos como o Neo4j?',
    options: [
      'É o banco mais barato do mercado.',
      'Performance superior em consultas que envolvem múltiplos níveis de relacionamentos (travessias).',
      'Permite armazenar trilhões de documentos JSON sem relação.',
      'Substitui a necessidade de usar JavaScript no frontend.',
      'Não exige nenhum tipo de hardware especial.'
    ],
    correctAnswer: 1,
    explanation: 'Em bancos relacionais, muitos relacionamentos exigem JOINs caros. Em grafos, as conexões são persistidas fisicamente, tornando a navegação instantânea.'
  },
  {
    id: 'gr3',
    topic: 'Banco de Grafos',
    question: 'O que são "Propriedades" (Properties) em um grafo?',
    options: [
      'Os donos do banco de dados.',
      'Pares chave-valor armazenados dentro de nós ou relacionamentos.',
      'As permissões de acesso ao sistema.',
      'O tamanho total do banco em disco.',
      'As cores usadas na visualização do grafo.'
    ],
    correctAnswer: 1,
    explanation: 'Tanto os nós quanto as conexões podem ter atributos extras (ex: um nó "Pessoa" com propriedade "nome: João").'
  },
  {
    id: 'gr4',
    topic: 'Banco de Grafos',
    question: 'Bancos de Grafos são a escolha ideal para:',
    options: [
      'Sistemas de folha de pagamento simples.',
      'Redes sociais, sistemas de recomendação e detecção de fraudes.',
      'Armazenamento de logs de servidor.',
      'Hospedagem de sites estáticos.',
      'Processamento de imagens médicas.'
    ],
    correctAnswer: 1,
    explanation: 'Cenários onde o valor está na conexão entre os pontos (ex: "quem é amigo de quem que gosta de tal produto").'
  },
  {
    id: 'gr5',
    topic: 'Banco de Grafos',
    question: 'O que significa "Index-free Adjacency"?',
    options: [
      'O banco de dados não usa índices para nada.',
      'Cada nó armazena referências diretas para seus vizinhos, permitindo navegação sem buscas em índices.',
      'O banco é gratuito para uso acadêmico.',
      'Não é possível criar índices em colunas de texto.',
      'Os dados são armazenados de forma adjacente no HD.'
    ],
    correctAnswer: 1,
    explanation: 'Isso permite que a performance da consulta seja proporcional à parte do grafo sendo explorada, e não ao tamanho total do banco.'
  },
  {
    id: 'gr6',
    topic: 'Banco de Grafos',
    question: 'Qual dos seguintes modelos de banco de dados representa as informações através de nós, arestas e propriedades?',
    options: [
      'Base de Dados Relacional baseada em tabelas rígidas.',
      'Base de Dados Documento focada em objetos JSON.',
      'Base de Dados Colunar para análise de grandes volumes.',
      'Base de Dados de Grafos ideal para relações complexas.',
      'Base de Dados Chave-Valor para acesso ultra-rápido.'
    ],
    correctAnswer: 3,
    explanation: 'O modelo de grafos é especificamente desenhado para tratar conexões como cidadãos de primeira classe, facilitando a análise de redes.'
  },
  {
    id: 'gr7',
    topic: 'Banco de Grafos',
    question: 'Na arquitetura de Bancos de Dados de Grafos, qual elemento descreve a natureza da conexão entre dois nós?',
    options: [
      'Propriedade do Nó que armazena atributos específicos.',
      'Índice de Busca que acelera a localização de dados.',
      'Tipo de Relacionamento que define o sentido da conexão.',
      'Esquema da Tabela que organiza as colunas de dados.',
      'Partição de Dados que distribui a carga no cluster.'
    ],
    correctAnswer: 2,
    explanation: 'O tipo de relacionamento define o significado da conexão entre as entidades, como "SEGUE", "COMPROU" ou "TRABALHA_EM".'
  },
  {
    id: 'gr8',
    topic: 'Banco de Grafos',
    question: 'Qual linguagem de consulta é frequentemente utilizada para interagir com Bancos de Dados de Grafos?',
    options: [
      'SQL Structured Query Language para tabelas relacionais.',
      'MongoDB Query Language para documentos flexíveis.',
      'Cypher otimizada para busca de padrões em grafos.',
      'Cassandra Query Language para famílias de colunas.',
      'XML Path Language para navegação em arquivos XML.'
    ],
    correctAnswer: 2,
    explanation: 'Cypher é uma linguagem declarativa inspirada no SQL, mas otimizada para expressar padrões de grafos de forma visual e intuitiva.'
  },
  {
    id: 'gr9',
    topic: 'Banco de Grafos',
    question: 'Qual conceito da Teoria dos Grafos é utilizado para medir a importância ou eficiência de conexão entre nós?',
    options: [
      'Cardinalidade que mede o volume de registros únicos.',
      'Densidade que calcula a proporção de arestas existentes.',
      'Grau do Nó que conta o número de conexões diretas.',
      'Centralidade que identifica nós influentes na rede.',
      'Latência que mede o tempo de resposta das consultas.'
    ],
    correctAnswer: 3,
    explanation: 'A centralidade ajuda a identificar os nós mais importantes ou influentes dentro de uma rede complexa de conexões.'
  },
  {
    id: 'gr10',
    topic: 'Banco de Grafos',
    question: 'Qual dos seguintes não é considerado um componente essencial na estrutura de um Banco de Dados de Grafos?',
    options: [
      'Nós Vertices que representam as entidades do sistema.',
      'Arestas Relacionamentos que conectam os nós entre si.',
      'Propriedades Atributos que detalham as informações.',
      'Tabelas com Chaves Estrangeiras para ligar os dados.',
      'Rótulos Tipos que categorizam os elementos do grafo.'
    ],
    correctAnswer: 3,
    explanation: 'Bancos de grafos eliminam a necessidade de tabelas e chaves estrangeiras, usando conexões diretas entre os objetos de dados.'
  },
  {
    id: 'gr11',
    topic: 'Banco de Grafos',
    question: 'O que representa um índice de propriedade em um Banco de Dados de Grafos?',
    options: [
      'Uma lista de todos os relacionamentos em um grafo.',
      'Um mecanismo para garantir a unicidade de rótulos.',
      'Estrutura para acelerar a busca de nós por valor.',
      'Uma forma de compactar o armazenamento dos nós.',
      'O número total de arestas conectadas a um nó.'
    ],
    correctAnswer: 2,
    explanation: 'Índices de propriedade permitem localizar rapidamente o ponto de partida de uma travessia no grafo sem percorrer todos os nós.'
  },
  {
    id: 'gr12',
    topic: 'Banco de Grafos',
    question: 'Qual a vantagem de um Banco de Grafos sobre um Relacional para consultas com múltiplos níveis de conexões?',
    options: [
      'Maior integridade transacional em todas as tabelas.',
      'Menor redundância de dados em esquemas normalizados.',
      'Melhor desempenho na travessia de relacionamentos.',
      'Mais facilidade em operações de agregação de dados.',
      'Melhor suporte a dados não estruturados e binários.'
    ],
    correctAnswer: 2,
    explanation: 'Em grafos, a performance de travessia é constante e não depende do volume total de dados, ao contrário dos JOINs relacionais.'
  },
  {
    id: 'gr13',
    topic: 'Banco de Grafos',
    question: 'Qual termo descreve a situação em que o Banco de Grafos é usado para encontrar o trajeto mais curto entre nós?',
    options: [
      'Agregação de valores em um conjunto de resultados.',
      'Indexação de campos para busca rápida de registros.',
      'Caminho Mínimo entre dois pontos na rede de dados.',
      'Propagação de mudanças em um cluster distribuído.',
      'Sharding de dados para escalabilidade horizontal.'
    ],
    correctAnswer: 2,
    explanation: 'O algoritmo de caminho mínimo é fundamental para aplicações de logística, redes sociais e sistemas de recomendação.'
  },
  {
    id: 'gr14',
    topic: 'Banco de Grafos',
    question: 'Qual o papel do Modelo de Propriedades de Grafos na teoria de Bancos de Dados de Grafos?',
    options: [
      'Definir como os dados são armazenados em discos.',
      'Descrever formalmente nós, relações e propriedades.',
      'Gerenciar o acesso concorrente aos dados do banco.',
      'Determinar a linguagem de programação do front-end.',
      'Realizar a otimização de consultas complexas SQL.'
    ],
    correctAnswer: 1,
    explanation: 'O Labeled Property Graph (LPG) é o modelo mais comum, permitindo que tanto nós quanto arestas possuam atributos detalhados.'
  },
  {
    id: 'gr15',
    topic: 'Banco de Grafos',
    question: 'Qual conceito é responsável por agrupar nós que compartilham o mesmo tipo, facilitando a consulta?',
    options: [
      'Chave Primária que identifica o registro de forma única.',
      'Cluster que distribui os dados por vários servidores.',
      'Rótulo Label que categoriza os elementos do grafo.',
      'View que representa uma visão lógica das tabelas.',
      'Procedure Stored que executa lógica no lado do banco.'
    ],
    correctAnswer: 2,
    explanation: 'Rótulos (Labels) permitem categorizar nós, como "Pessoa" ou "Empresa", otimizando a filtragem e a organização do grafo.'
  },

  // --- Fundamentos de BD (5 Questões) ---
  {
    id: 'fnd1',
    topic: 'Fundamentos de BD',
    question: 'O que é a "Normalização" em bancos de dados relacionais?',
    options: [
      'O processo de aumentar o tamanho das tabelas.',
      'Organizar os dados para reduzir a redundância e melhorar a integridade.',
      'Converter o banco de dados para o formato NoSQL.',
      'Garantir que todos os usuários tenham a mesma senha.',
      'Traduzir os nomes das colunas para o inglês.'
    ],
    correctAnswer: 1,
    explanation: 'A normalização (1NF, 2NF, 3NF...) visa eliminar dados duplicados e anomalias de atualização.'
  },
  {
    id: 'fnd2',
    topic: 'Fundamentos de BD',
    question: 'Qual a função de uma "Chave Estrangeira" (Foreign Key)?',
    options: [
      'Permitir o acesso de usuários de outros países.',
      'Estabelecer um vínculo entre os dados de duas tabelas diferentes.',
      'Criptografar os dados sensíveis.',
      'Aumentar a velocidade de download do banco.',
      'Substituir a chave primária em caso de erro.'
    ],
    correctAnswer: 1,
    explanation: 'A FK garante a integridade referencial, assegurando que um registro em uma tabela aponte para um registro válido em outra.'
  },
  {
    id: 'fnd3',
    topic: 'Fundamentos de BD',
    question: 'O que é um "Índice" em um banco de dados?',
    options: [
      'Uma lista de todos os bugs do sistema.',
      'Uma estrutura de dados que melhora a velocidade das operações de busca.',
      'O número da página no manual do usuário.',
      'Uma restrição que impede a inserção de dados.',
      'Um backup compactado do banco.'
    ],
    correctAnswer: 1,
    explanation: 'Índices funcionam como o índice de um livro, permitindo encontrar dados sem ler a tabela inteira (Full Table Scan).'
  },
  {
    id: 'fnd4',
    topic: 'Fundamentos de BD',
    question: 'O que caracteriza uma transação "Atomic" (Atômica)?',
    options: [
      'Ela explode se houver um erro.',
      'Ou a transação é concluída inteiramente com sucesso, ou nada é aplicado.',
      'Ela é processada em um reator nuclear.',
      'Ela divide os dados em partículas menores.',
      'Ela só pode ser executada uma vez por dia.'
    ],
    correctAnswer: 1,
    explanation: 'Atomicidade garante que operações parciais não deixem o banco em estado inconsistente.'
  },
  {
    id: 'fnd5',
    topic: 'Fundamentos de BD',
    question: 'Qual a diferença entre DDL e DML no SQL?',
    options: [
      'Não há diferença, são sinônimos.',
      'DDL é para definir a estrutura (CREATE, ALTER); DML é para manipular dados (INSERT, UPDATE).',
      'DDL é para bancos NoSQL e DML para SQL.',
      'DDL é mais rápido que DML.',
      'DDL é para usuários e DML para administradores.'
    ],
    correctAnswer: 1,
    explanation: 'DDL (Data Definition Language) lida com o esquema; DML (Data Manipulation Language) lida com o conteúdo.'
  },
  {
    id: 'fnd6',
    topic: 'Fundamentos de BD',
    question: 'A abordagem de Duplicação de Dados no contexto NoSQL tem como principal objetivo:',
    options: [
      'Garantir a integridade referencial estrita entre coleções de dados.',
      'Reduzir a quantidade de espaço de armazenamento total do banco de dados.',
      'Eliminar a necessidade de índices em todas as coleções de dados do sistema.',
      'Evitar a necessidade de operações de JOIN em leitura, aumentando a velocidade.',
      'Facilitar a criação de esquemas rígidos e imutáveis para o banco de dados.'
    ],
    correctAnswer: 3,
    explanation: 'A duplicação de dados no NoSQL visa otimizar a leitura, permitindo que os dados relacionados sejam recuperados sem a necessidade de junções complexas entre tabelas.'
  },
  {
    id: 'fnd7',
    topic: 'Fundamentos de BD',
    question: 'Qual é a principal desvantagem da Normalização de Dados que a Duplicação busca mitigar no cenário da Web 2.0 e Big Data?',
    options: [
      'A complexidade na manutenção de índices de busca em grandes volumes de dados.',
      'O alto custo de licenciamento de software para sistemas de gerenciamento RDBMS.',
      'A necessidade de múltiplas operações de JOIN para recuperar um objeto completo.',
      'A dificuldade de armazenar dados semi-estruturados em tabelas com esquema fixo.',
      'A incapacidade de suportar transações ACID em ambientes de alta disponibilidade.'
    ],
    correctAnswer: 2,
    explanation: 'A normalização fragmenta os dados em várias tabelas, o que exige junções custosas para reconstruir o objeto original durante a leitura.'
  },
  {
    id: 'fnd8',
    topic: 'Fundamentos de BD',
    question: 'No contexto de um carrinho de compras em NoSQL, o conceito de Agregado JSON refere-se a:',
    options: [
      'O processo de garantir que o carrinho esteja normalizado em várias tabelas.',
      'A técnica de usar múltiplas chaves primárias para identificar o mesmo item.',
      'Salvar o carrinho inteiro como um único objeto JSON, buscável por uma chave.',
      'O uso de um esquema rígido que impede alterações rápidas na estrutura básica.',
      'Uma otimização de cache que armazena apenas os identificadores dos produtos.'
    ],
    correctAnswer: 2,
    explanation: 'O Agregado JSON permite armazenar toda a informação de uma entidade complexa em um único documento, facilitando o acesso atômico.'
  },
  {
    id: 'fnd9',
    topic: 'Fundamentos de BD',
    question: 'A principal diferença entre o Schema Rígido do SQL e o Schema Flexível do NoSQL é que o Schema Flexível:',
    options: [
      'Proíbe completamente o uso de qualquer chave primária em suas coleções.',
      'Exige que todas as coleções tenham o mesmo número de atributos internos.',
      'Permite inserir dados com estruturas diferentes na mesma coleção de dados.',
      'Prioriza a consistência estrita em detrimento da disponibilidade do sistema.',
      'É usado exclusivamente em bancos de dados de Grafos para redes sociais.'
    ],
    correctAnswer: 2,
    explanation: 'O esquema flexível permite que documentos na mesma coleção tenham campos diferentes, suportando a evolução rápida do software.'
  },
  {
    id: 'fnd10',
    topic: 'Fundamentos de BD',
    question: 'O conceito de Persistência Poliglota significa a prática de:',
    options: [
      'Usar apenas um tipo de banco de dados em um sistema de software complexo.',
      'Utilizar diferentes tecnologias de armazenamento para diferentes necessidades.',
      'Migrar todos os dados de um banco SQL para um NoSQL para escalabilidade.',
      'Armazenar o mesmo dado em diferentes idiomas simultaneamente no servidor.',
      'Usar a linguagem SQL para interagir com todos os tipos de bancos de dados.'
    ],
    correctAnswer: 1,
    explanation: 'A persistência poliglota reconhece que diferentes problemas de dados são melhor resolvidos por diferentes tipos de bancos de dados.'
  },
  {
    id: 'fnd11',
    topic: 'Fundamentos de BD',
    question: 'Em uma arquitetura de Persistência Poliglota, o banco de dados SQL seria tipicamente mais adequado para qual cenário?',
    options: [
      'Armazenamento massivo de logs de dispositivos de Internet das Coisas.',
      'Catálogos de produtos com alta flexibilidade de atributos e variações.',
      'Transações financeiras onde a consistência ACID é um requisito crítico.',
      'Perfil de usuários de rede social para acesso ultra-rápido via memória.',
      'Dados que precisam de alta disponibilidade e consistência eventual BASE.'
    ],
    correctAnswer: 2,
    explanation: 'Bancos relacionais são ideais para dados que exigem forte consistência e integridade, como operações financeiras.'
  },
  {
    id: 'fnd12',
    topic: 'Fundamentos de BD',
    question: 'O uso do NoSQL em uma arquitetura de Persistência Poliglota é geralmente justificado quando o foco é:',
    options: [
      'Garantir a integridade referencial complexa entre as entidades do sistema.',
      'Manter um esquema de dados estável e previsível por décadas de operação.',
      'Velocidade, alta escalabilidade e manipulação de grandes volumes de dados.',
      'Atender a padrões legados de sistemas que exigem o uso de bancos RDBMS.',
      'Reduzir o risco de aprisionamento tecnológico com um único fornecedor.'
    ],
    correctAnswer: 2,
    explanation: 'NoSQL é escolhido quando a aplicação precisa escalar horizontalmente e lidar com grandes volumes de dados variados.'
  },
  {
    id: 'fnd13',
    topic: 'Fundamentos de BD',
    question: 'Qual das seguintes arquiteturas representa um exemplo prático de Persistência Poliglota?',
    options: [
      'Usar apenas PostgreSQL para gerenciar todas as operações do sistema.',
      'Usar MongoDB para gerenciar todas as operações do sistema de software.',
      'Usar SQL para Folha de Pagamento e NoSQL para o Cache de Sessões de uso.',
      'Usar dois bancos de dados do mesmo tipo, como dois servidores de Oracle.',
      'Usar um banco de dados de Grafos apenas para a interface do usuário final.'
    ],
    correctAnswer: 2,
    explanation: 'Combinar SQL para dados estruturados e NoSQL para cache ou dados não estruturados é o exemplo clássico de persistência poliglota.'
  },
  {
    id: 'fnd14',
    topic: 'Fundamentos de BD',
    question: 'O Sharding é uma técnica primariamente utilizada para alcançar qual objetivo na engenharia de sistemas de dados?',
    options: [
      'Reduzir a latência de rede entre os servidores da aplicação distribuída.',
      'Permitir que o volume de dados seja dividido por múltiplos servidores.',
      'Garantir a atomicidade das transações em ambientes de alta concorrência.',
      'Diminuir o custo de licenciamento de software para bancos de dados SQL.',
      'Eliminar a necessidade de backups automáticos em sistemas de produção.'
    ],
    correctAnswer: 1,
    explanation: 'Sharding distribui os dados horizontalmente em vários nós, permitindo que o sistema suporte volumes de dados maiores que a capacidade de um único servidor.'
  },
  {
    id: 'fnd15',
    topic: 'Fundamentos de BD',
    question: 'Qual é a principal diferença entre a Escalabilidade Vertical e o Sharding?',
    options: [
      'Escalabilidade Vertical é mais barata que a implementação de Sharding.',
      'Sharding divide os dados em múltiplos servidores de baixo custo relativo.',
      'Escalabilidade Vertical é obrigatória em sistemas modernos na nuvem.',
      'Sharding é usado exclusivamente para processamento de dados em tempo real.',
      'Escalabilidade Vertical dispensa completamente o uso de índices de busca.'
    ],
    correctAnswer: 1,
    explanation: 'A escalabilidade vertical aumenta os recursos de uma única máquina, enquanto o sharding distribui a carga entre várias máquinas (escalabilidade horizontal).'
  },
  {
    id: 'fnd16',
    topic: 'Fundamentos de BD',
    question: 'Se um sistema fragmenta dados de usuários alfabeticamente entre servidores, qual problema o Sharding está resolvendo?',
    options: [
      'A falta de disponibilidade do sistema de acordo com o Teorema CAP.',
      'A incapacidade de realizar o backup de segurança de todos os dados.',
      'O fato de os dados não caberem mais na capacidade de um único servidor.',
      'O alto custo de migração de um banco de dados RDBMS para um NoSQL.',
      'A lentidão das operações de alteração de tabelas em bancos relacionais.'
    ],
    correctAnswer: 2,
    explanation: 'O Sharding resolve o problema de saturação de recursos (disco, CPU, RAM) de um único nó ao distribuir os dados.'
  },
  {
    id: 'fnd17',
    topic: 'Fundamentos de BD',
    question: 'O Sharding é tipicamente um recurso de banco de dados que:',
    options: [
      'É facilmente implementado no SQL tradicional sem lógica na aplicação.',
      'É feito automaticamente pelos bancos de dados NoSQL de grande escala.',
      'Só pode ser aplicado em bancos de dados do tipo Grafo e Redes Sociais.',
      'Diminuir a Tolerância a Partição em sistemas distribuídos complexos.',
      'Aumenta a rigidez do esquema de dados em ambientes de Big Data.'
    ],
    correctAnswer: 1,
    explanation: 'Muitos bancos NoSQL modernos foram projetados com sharding automático (auto-sharding) nativo, simplificando a escalabilidade horizontal.'
  }
];

