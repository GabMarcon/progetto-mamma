const quizzes = {
  presente_indicativo: [
    {
      pergunta: "1. Io ______ l'italiano.",
      opcoes: ["parli", "parlo", "parla", "parlano"],
      resposta: "parlo",
      explicacao:
        "Para 'Io' (eu), a terminação regular do presente para verbos em -are, como 'parlare', é <b>-o</b>.",
    },
    {
      pergunta: "2. Tu ______ un caffè?",
      opcoes: ["prende", "prendiamo", "prendo", "prendi"],
      resposta: "prendi",
      explicacao:
        "Para 'Tu' (você), a terminação do presente para verbos em -ere, como 'prendere', é <b>-i</b>.",
    },
    {
      pergunta: "3. Lei ______ un libro interessante.",
      opcoes: ["legge", "leggi", "leggo", "leggiamo"],
      resposta: "legge",
      explicacao:
        "Para 'Lei' (ela), a terminação do presente para verbos em -ere, como 'leggere', é <b>-e</b>.",
    },
    {
      pergunta: "4. Noi ______ a casa tardi.",
      opcoes: ["tornate", "tornano", "torniamo", "torna"],
      resposta: "torniamo",
      explicacao:
        "Para 'Noi' (nós), a terminação do presente para quase todos os verbos é <b>-iamo</b>.",
    },
    {
      pergunta: "5. Voi ______ la lezione?",
      opcoes: ["capisco", "capisce", "capite", "capiscono"],
      resposta: "capite",
      explicacao:
        "Para 'Voi' (vocês), a terminação do presente para verbos em -ire, como 'capire', é <b>-ite</b>.",
    },
    {
      pergunta: "6. Loro ______ la porta.",
      opcoes: ["apriamo", "aprono", "apri", "apre"],
      resposta: "aprono",
      explicacao:
        "Para 'Loro' (eles/elas), a terminação do presente para verbos em -ire, como 'aprire', é <b>-ono</b>.",
    },
    {
      pergunta: "7. Io ______ molto felice oggi.",
      opcoes: ["siamo", "sono", "è", "sei"],
      resposta: "sono",
      explicacao:
        "O verbo 'essere' (ser/estar) é irregular. A conjugação para 'Io' é <b>sono</b>.",
    },
    {
      pergunta: "8. Tu dove ______?",
      opcoes: ["va", "vado", "vai", "andiamo"],
      resposta: "vai",
      explicacao:
        "O verbo 'andare' (ir) é irregular. A conjugação para 'Tu' é <b>vai</b>.",
    },
    {
      pergunta: "9. Cosa ______ stasera?",
      opcoes: ["faccio", "fa", "fai", "facciamo"],
      resposta: "fai",
      explicacao:
        "O verbo 'fare' (fazer) é irregular. A conjugação para 'Tu' é <b>fai</b>.",
    },
    {
      pergunta: "10. Loro non ______ mai la verità.",
      opcoes: ["dice", "diciamo", "dicono", "dico"],
      resposta: "dicono",
      explicacao:
        "O verbo 'dire' (dizer) é irregular. A conjugação para 'Loro' é <b>dicono</b>.",
    },
  ],
  passato_prossimo: [
    {
      pergunta: "1. Ieri io ______ una mela.",
      opcoes: ["sono mangiato", "ho mangiato", "mangiavo", "ho mangiata"],
      resposta: "ho mangiato",
      explicacao:
        "O verbo 'mangiare' usa o auxiliar <b>avere</b> (ho). O particípio 'mangiato' não varia com 'avere'.",
    },
    {
      pergunta: "2. Maria ______ un bel film.",
      opcoes: ["è vista", "ha veduto", "ha visto", "vedeva"],
      resposta: "ha visto",
      explicacao:
        "O verbo 'vedere' usa o auxiliar <b>avere</b> (ha). O particípio passado irregular de 'vedere' é <b>visto</b>.",
    },
    {
      pergunta: "3. Noi ______ molto ieri sera.",
      opcoes: ["abbiamo dormito", "siamo dormiti", "dormivamo", "dormimmo"],
      resposta: "abbiamo dormito",
      explicacao:
        "O verbo 'dormire' usa o auxiliar <b>avere</b> (abbiamo), pois não indica movimento ou mudança de estado.",
    },
    {
      pergunta: "4. L'anno scorso, tu ______ a Roma?",
      opcoes: ["andavi", "hai andato", "fosti", "sei andato"],
      resposta: "sei andato",
      explicacao:
        "O verbo 'andare' é um verbo de movimento e usa o auxiliar <b>essere</b> (sei). O particípio é 'andato'.",
    },
    {
      pergunta: "5. Laura ______ ieri mattina.",
      opcoes: ["ha partito", "partiva", "è partita", "è partira"],
      resposta: "è partita",
      explicacao:
        "'Partire' é um verbo de movimento que usa <b>essere</b>. Como o sujeito 'Laura' é feminino, o particípio concorda: <b>partita</b>.",
    },
    {
      pergunta: "6. Voi ______ i biglietti?",
      opcoes: ["siete comprati", "compravate", "compraste", "avete comprato"],
      resposta: "avete comprato",
      explicacao:
        "O verbo 'comprare' usa o auxiliar <b>avere</b> (avete), pois é transitivo (comprar o quê? os biglietti).",
    },
    {
      pergunta: "7. Marco e Luca ______ in ritardo.",
      opcoes: [
        "hanno arrivato",
        "arrivavano",
        "sono arrivati",
        "sono arrivato",
      ],
      resposta: "sono arrivati",
      explicacao:
        "'Arrivare' usa <b>essere</b>. Como o sujeito é masculino e plural ('Marco e Luca'), o particípio concorda: <b>arrivati</b>.",
    },
    {
      pergunta: "8. Le ragazze ______ a casa presto.",
      opcoes: ["hanno tornato", "tornavano", "sono tornate", "sono tornati"],
      resposta: "sono tornate",
      explicacao:
        "'Tornare' usa <b>essere</b>. Como o sujeito é feminino e plural ('le ragazze'), o particípio concorda: <b>tornate</b>.",
    },
    {
      pergunta: "9. Stamattina, io ______ alle sette.",
      opcoes: [
        "mi ho svegliato",
        "mi svegliavo",
        "mi sono svegliato",
        "svegliato",
      ],
      resposta: "mi sono svegliato",
      explicacao:
        "Verbos reflexivos como 'svegliarsi' sempre usam o auxiliar <b>essere</b> no Passato Prossimo.",
    },
    {
      pergunta: "10. Cosa ______ ieri? Non ti ho visto.",
      opcoes: ["facevi", "sei fatto", "facesti", "hai fatto"],
      resposta: "hai fatto",
      explicacao:
        "O verbo 'fare' usa o auxiliar <b>avere</b>. Seu particípio passado irregular é <b>fatto</b>.",
    },
  ],
  preposizioni: [
    {
      pergunta: "1. Questo è il libro ______ professore.",
      opcoes: ["di", "a", "da", "in"],
      resposta: "di",
      explicacao:
        "A preposição <b>di</b> é usada para indicar posse, como em 'o livro do professor'.",
    },
    {
      pergunta: "2. Domani vado ______ Roma.",
      opcoes: ["in", "da", "a", "di"],
      resposta: "a",
      explicacao:
        "Usa-se a preposição <b>a</b> antes de nomes de cidades e pequenas ilhas.",
    },
    {
      pergunta: "3. Torno ______ casa alle cinque.",
      opcoes: ["da", "a", "in", "per"],
      resposta: "a",
      explicacao:
        "A expressão fixa para 'em casa' ou 'para casa' é <b>a casa</b>.",
    },
    {
      pergunta: "4. Andiamo a mangiare ______ amici.",
      opcoes: ["per", "su", "tra", "con"],
      resposta: "con",
      explicacao: "A preposição <b>con</b> é usada para indicar companhia.",
    },
    {
      pergunta: "5. Vengo ______ Brasile.",
      opcoes: ["dal", "da", "del", "di"],
      resposta: "da",
      explicacao:
        "A preposição <b>da</b> é usada para indicar origem ou proveniência de um lugar.",
    },
    {
      pergunta: "6. Ho comprato un regalo ______ te.",
      opcoes: ["per", "con", "su", "fra"],
      resposta: "per",
      explicacao:
        "A preposição <b>per</b> é usada para indicar finalidade ou o destinatário de algo.",
    },
    {
      pergunta: "7. Il gatto è ______ albero.",
      opcoes: ["in", "a", "con", "su"],
      resposta: "su",
      explicacao:
        "A preposição <b>su</b> indica que algo está sobre ou em cima de outra coisa.",
    },
    {
      pergunta: "8. Stasera vado ______ Marco.",
      opcoes: ["a", "da", "in", "di"],
      resposta: "da",
      explicacao:
        "Usa-se <b>da</b> + nome de pessoa para indicar que se vai ao local onde essa pessoa está (casa, trabalho, etc.).",
    },
    {
      pergunta: "9. Il treno parte ______ due ore.",
      opcoes: ["in", "fra", "a", "per"],
      resposta: "fra",
      explicacao:
        "As preposições <b>tra</b> ou <b>fra</b> são usadas para indicar um período de tempo no futuro ('daqui a...').",
    },
    {
      pergunta: "10. Parliamo ______ politica.",
      opcoes: ["su", "di", "per", "con"],
      resposta: "di",
      explicacao:
        "A preposição <b>di</b> é usada para introduzir o assunto ou tópico de uma conversa ('falar de...').",
    },
  ],
  futuro_semplice: [
    {
      pergunta: "1. Domani io ______ la nonna.",
      opcoes: ["visiterò", "visito", "visitavo", "ho visitato"],
      resposta: "visiterò",
      explicacao:
        "Para uma ação futura, usamos o Futuro Simples. A terminação para 'io' é <b>-ò</b>.",
    },
    {
      pergunta: "2. Tu cosa ______ per cena?",
      opcoes: ["cucini", "cucinavi", "cucinerai", "hai cucinato"],
      resposta: "cucinerai",
      explicacao:
        "Para uma pergunta sobre o futuro, usamos o Futuro Simples. A terminação para 'tu' é <b>-ai</b>.",
    },
    {
      pergunta: "3. Lui ______ il nuovo progetto.",
      opcoes: ["finisce", "finirà", "finiva", "ha finito"],
      resposta: "finirà",
      explicacao:
        "Ação futura. A terminação do futuro para 'lui' em verbos -ire é <b>-à</b>.",
    },
    {
      pergunta: "4. Noi ______ un viaggio in Italia.",
      opcoes: ["facciamo", "faremo", "facevamo", "abbiamo fatto"],
      resposta: "faremo",
      explicacao:
        "O verbo 'fare' é irregular no futuro. Para 'noi', a forma é <b>faremo</b>.",
    },
    {
      pergunta: "5. Voi ______ la verità?",
      opcoes: ["dite", "dicevate", "direte", "avete detto"],
      resposta: "direte",
      explicacao:
        "O verbo 'dire' é irregular no futuro. Para 'voi', a forma é <b>direte</b>.",
    },
    {
      pergunta: "6. Loro ______ molto felici di vederti.",
      opcoes: ["sono", "erano", "saranno", "sono stati"],
      resposta: "saranno",
      explicacao:
        "O verbo 'essere' é irregular no futuro. Para 'loro', a forma é <b>saranno</b>.",
    },
    {
      pergunta: "7. Io e te ______ insieme per sempre.",
      opcoes: ["resteremo", "restiamo", "restavamo", "siamo restati"],
      resposta: "resteremo",
      explicacao:
        "'Io e te' é 'noi'. A terminação do futuro para 'noi' é <b>-emo</b>.",
    },
    {
      pergunta: "8. Tu ______ con noi al cinema?",
      opcoes: ["vieni", "verrai", "venivi", "sei venuto"],
      resposta: "verrai",
      explicacao:
        "O verbo 'venire' é irregular no futuro. Para 'tu', a forma é <b>verrai</b>.",
    },
    {
      pergunta: "9. Chissà dove ______ adesso Marco...",
      opcoes: ["è", "sarà", "era", "è stato"],
      resposta: "sarà",
      explicacao:
        "Aqui, o futuro é usado para expressar uma dúvida ou suposição no presente. 'Onde será que ele está?'",
    },
    {
      pergunta: "10. Non ti preoccupare, ______ tutto bene.",
      opcoes: ["va", "andava", "è andato", "andrà"],
      resposta: "andrà",
      explicacao:
        "Para expressar uma certeza ou esperança futura, usamos o Futuro Simples. A forma correta é 'tutto <b>andrà</b> bene'.",
    },
  ],
  preposizioni_articolate: [
    {
      pergunta: "1. Vado ______ cinema stasera.",
      opcoes: ["al", "il", "lo", "allo"],
      resposta: "al",
      explicacao:
        "A expressão é 'andare <b>a</b>'. 'Cinema' é masculino e começa com consoante, então o artigo é '<b>il</b>'. A + IL = <b>AL</b>.",
    },
    {
      pergunta: "2. Il colore ______ cielo è blu.",
      opcoes: ["il", "del", "di", "dal"],
      resposta: "del",
      explicacao:
        "A preposição para posse é '<b>di</b>'. O artigo para 'cielo' é '<b>il</b>'. DI + IL = <b>DEL</b>.",
    },
    {
      pergunta: "3. Mettiamo i libri ______ zaino.",
      opcoes: ["lo", "in", "nello", "lo"],
      resposta: "nello",
      explicacao:
        "A preposição é '<b>in</b>'. 'Zaino' começa com 'z', então o artigo é '<b>lo</b>'. IN + LO = <b>NELLO</b>.",
    },
    {
      pergunta: "4. Scrivo una lettera ______ amici.",
      opcoes: ["i", "a", "agli", "gli"],
      resposta: "agli",
      explicacao:
        "A preposição é '<b>a</b>'. 'Amici' começa com vogal e é plural masculino, então o artigo é '<b>gli</b>'. A + GLI = <b>AGLI</b>.",
    },
    {
      pergunta: "5. La festa si terrà ______ piazza principale.",
      opcoes: ["nella", "la", "in", "alla"],
      resposta: "nella",
      explicacao:
        "A preposição é '<b>in</b>'. 'Piazza' é feminino singular, o artigo é '<b>la</b>'. IN + LA = <b>NELLA</b>.",
    },
    {
      pergunta: "6. Ho preso la ricetta ______ nonna.",
      opcoes: ["la", "dalla", "da", "di"],
      resposta: "dalla",
      explicacao:
        "A preposição é '<b>da</b>' (origem). 'Nonna' é feminino singular, o artigo é '<b>la</b>'. DA + LA = <b>DALLA</b>.",
    },
    {
      pergunta: "7. Parliamo ______ sport che preferiamo.",
      opcoes: ["degli", "i", "di", "gli"],
      resposta: "degli",
      explicacao:
        "A preposição para tópico é '<b>di</b>'. 'Sport' é plural masculino e começa com 's+consoante', o artigo é '<b>gli</b>'. DI + GLI = <b>DEGLI</b>.",
    },
    {
      pergunta: "8. Le chiavi sono ______ tavolo in cucina.",
      opcoes: ["sul", "il", "su", "al"],
      resposta: "sul",
      explicacao:
        "A preposição é '<b>su</b>'. O artigo para 'tavolo' é '<b>il</b>'. SU + IL = <b>SUL</b>.",
    },
    {
      pergunta: "9. La soluzione ______ problemi non è semplice.",
      opcoes: ["i", "a", "gli", "ai"],
      resposta: "ai",
      explicacao:
        "A preposição é '<b>a</b>'. O artigo para 'problemi' (plural de 'problema') é '<b>i</b>'. A + I = <b>AI</b>.",
    },
    {
      pergunta: "10. Il prossimo anno andrò ______ Stati Uniti.",
      opcoes: ["negli", "nei", "in", "agli"],
      resposta: "negli",
      explicacao:
        "Para países no plural, usa-se '<b>in</b>'. O artigo para 'Stati Uniti' é '<b>gli</b>'. IN + GLI = <b>NEGLI</b>.",
    },
  ],
  imperfetto: [
    {
      pergunta: "1. Da bambino, io ______ la televisione ogni pomeriggio.",
      opcoes: ["ho guardato", "guardavo", "guardo", "guarderò"],
      resposta: "guardavo",
      explicacao:
        "A expressão 'Da bambino' (quando criança) indica uma ação habitual no passado, que pede o Imperfetto: <b>guardavo</b>.",
    },
    {
      pergunta: "2. Quel giorno, il sole ______ e gli uccelli cantavano.",
      opcoes: ["ha splenduto", "splende", "splendeva", "splenderà"],
      resposta: "splendeva",
      explicacao:
        "Aqui estamos descrevendo o cenário ('o sol brilhava'), uma das funções principais do Imperfetto: <b>splendeva</b>.",
    },
    {
      pergunta: "3. Mentre tu dormivi, io ______ la colazione.",
      opcoes: ["ho preparato", "preparo", "preparavo", "preparerò"],
      resposta: "preparavo",
      explicacao:
        "A palavra 'mentre' (enquanto) indica uma ação contínua no passado, que pede o Imperfetto: <b>preparavo</b>.",
    },
    {
      pergunta: "4. Loro ______ sempre al mare d'estate.",
      opcoes: ["vanno", "andranno", "andavano", "sono andati"],
      resposta: "andavano",
      explicacao:
        "A palavra 'sempre' sinaliza uma ação habitual no passado, o uso clássico do Imperfetto: <b>andavano</b>.",
    },
    {
      pergunta: "5. Quando tu mi hai chiamato, io ______ la doccia.",
      opcoes: ["faccio", "ho fatto", "facevo", "farò"],
      resposta: "facevo",
      explicacao:
        "A ação de 'tomar banho' era a ação contínua que estava acontecendo quando a outra (a chamada) a interrompeu. Por isso, usa-se o Imperfetto: <b>facevo</b>.",
    },
    {
      pergunta: "6. Noi non ______ cosa fare.",
      opcoes: ["abbiamo saputo", "sappiamo", "sapevamo", "sapremo"],
      resposta: "sapevamo",
      explicacao:
        "Descreve um estado mental ou sentimento no passado ('nós não sabíamos'), pedindo o Imperfetto: <b>sapevamo</b>.",
    },
    {
      pergunta: "7. La casa dove ______ da piccola era molto grande.",
      opcoes: ["abito", "ho abitato", "abiterò", "abitavo"],
      resposta: "abitavo",
      explicacao:
        "Descreve uma situação habitual e contínua no passado ('onde eu morava'), pedindo o Imperfetto: <b>abitavo</b>.",
    },
    {
      pergunta: "8. Mentre ______ per strada, ______ un vecchio amico.",
      opcoes: [
        "camminavo, ho incontrato",
        "camminavo, incontravo",
        "ho camminato, ho incontrato",
        "cammino, incontro",
      ],
      resposta: "camminavo, ho incontrato",
      explicacao:
        "A ação de caminhar ('camminavo') é a longa (Imperfetto), e a de encontrar ('ho incontrato') é a curta que a interrompeu (Passato Prossimo).",
    },
    {
      pergunta: "9. Ieri sera ______ molto stanco, perciò non ______.",
      opcoes: [
        "sono stato, uscivo",
        "ero, uscivo",
        "ero, sono uscito",
        "fui, uscii",
      ],
      resposta: "ero, sono uscito",
      explicacao:
        "O estado de estar cansado ('ero') é uma descrição (Imperfetto), e a decisão de não sair ('non sono uscito') é uma ação pontual e concluída (Passato Prossimo).",
    },
    {
      pergunta: "10. Cosa ______ quando è iniziato a piovere?",
      opcoes: ["hai fatto", "facevi", "fai", "farai"],
      resposta: "facevi",
      explicacao:
        "A pergunta é sobre a ação contínua que estava acontecendo ('o que você estava fazendo?') quando a chuva começou. Por isso, usa-se o Imperfetto: <b>facevi</b>.",
    },
  ],
};
