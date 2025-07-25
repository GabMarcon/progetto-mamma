const quizzes = {
  presente_indicativo: [
    {
      pergunta: "1. Non ______ mai cosa ______, è troppo indecisa.",
      opcoes: [
        "conosce, scegli",
        "sa, scegliere",
        "sa, sceglie",
        "conosce, sceglie",
      ],
      resposta: "sa, sceglie",
      explicacao:
        "Usa-se 'sapere' (<b>sa</b>) para uma informação e o verbo 'scegliere' (escolher) conjugado na terceira pessoa (<b>sceglie</b>).",
    },
    {
      pergunta: "2. Noi ______ le conclusioni dai fatti, non dalle opinioni.",
      opcoes: ["tradiamo", "tratteniamo", "traiamo", "traduciamo"],
      resposta: "traiamo",
      explicacao:
        "O verbo 'trarre' (tirar, extrair) é irregular. A forma para 'noi' no presente é <b>traiamo</b>.",
    },
    {
      pergunta:
        "3. Se voi non ______ le luci quando uscite, la bolletta ______.",
      opcoes: [
        "spegnete, sale",
        "spegnate, sale",
        "spengete, salite",
        "spegnete, salta",
      ],
      resposta: "spegnete, sale",
      explicacao:
        "A conjugação de 'spegnere' para 'voi' é <b>spegnete</b>. O verbo 'salire' (subir, aumentar) para 'la bolletta' (ela) é <b>sale</b>.",
    },
    {
      pergunta: "4. A cosa ______ questo silenzio improvviso?",
      opcoes: ["deve", "si deve", "dovrebbe", "si trattiene"],
      resposta: "si deve",
      explicacao:
        "A expressão 'dovuto a' indica causa. Na forma impessoal, usa-se o reflexivo: 'a cosa <b>si deve</b>?' (a que se deve?).",
    },
    {
      pergunta: "5. Loro ______ a rispettare le scadenze.",
      opcoes: ["ottengono", "mantengono", "tengono", "appartengono"],
      resposta: "tengono",
      explicacao:
        "A expressão 'tenere a qualcosa' significa 'dar importância a algo'. A conjugação para 'loro' de 'tenere' é <b>tengono</b>.",
    },
    {
      pergunta: "6. Tu ______ il discorso e io ______ gli appunti.",
      opcoes: ["fai, tengo", "fai, prendo", "fai, scrivo", "dici, prendo"],
      resposta: "fai, prendo",
      explicacao:
        "As expressões corretas são 'fare un discorso' (fazer um discurso) e 'prendere appunti' (fazer anotações). As conjugações são <b>fai</b> e <b>prendo</b>.",
    },
    {
      pergunta: "7. Io non ______ più le sue bugie, me ne ______.",
      opcoes: [
        "sopporto, vado",
        "reggo, vado",
        "credo, vado",
        "sostengo, parto",
      ],
      resposta: "reggo, vado",
      explicacao:
        "A expressão 'non reggere più' significa 'não aguentar mais'. 'Andarsene' (ir embora) se conjuga como <b>me ne vado</b>.",
    },
    {
      pergunta: "8. A quest'ora, di solito, il sole ______ già.",
      opcoes: ["sale", "spunta", "sorge", "appare"],
      resposta: "sorge",
      explicacao:
        "O verbo específico para o nascer do sol é 'sorgere'. A conjugação na terceira pessoa é <b>sorge</b>.",
    },
    {
      pergunta: "9. Se non ti ______ bene, ______ a casa.",
      opcoes: [
        "senti, resta",
        "senti, stai",
        "senti, rimani",
        "ascolti, rimani",
      ],
      resposta: "senti, rimani",
      explicacao:
        "'Sentirsi bene' é a expressão para se sentir bem. 'Rimanere a casa' é a expressão para ficar em casa. As formas para 'tu' são <b>senti</b> e <b>rimani</b>.",
    },
    {
      pergunta: "10. Questo quadro ______ un grande valore affettivo per me.",
      opcoes: ["detiene", "possiede", "contiene", "ha"],
      resposta: "possiede",
      explicacao:
        "Embora 'ha' não seja incorreto, <b>possiede</b> (de 'possedere') é um verbo mais preciso e sofisticado para indicar posse de valor ou qualidades.",
    },
  ],
  passato_prossimo: [
    {
      pergunta: "1. Appena ______ la notizia, ti ho chiamato.",
      opcoes: ["sapevo", "ho conosciuto", "ho saputo", "conoscevo"],
      resposta: "ho saputo",
      explicacao:
        "No passado, 'sapere' no Passato Prossimo (<b>ho saputo</b>) significa 'descobrir/ficar sabendo', uma ação pontual. 'Sapevo' (Imperfetto) significaria 'eu já sabia'.",
    },
    {
      pergunta:
        "2. Le tue amiche non ______ perché ______ male tutto il giorno.",
      opcoes: [
        "hanno uscito, hanno stato",
        "sono uscite, hanno state",
        "uscivano, stavano",
        "sono uscite, sono state",
      ],
      resposta: "sono uscite, sono state",
      explicacao:
        "Ambos os verbos ('uscire' e 'stare') usam o auxiliar 'essere'. O particípio deve concordar com o sujeito feminino plural: <b>sono uscite, sono state</b>.",
    },
    {
      pergunta: "3. Non ti ______ la giacca? Faceva freddo.",
      opcoes: ["sei messo", "ti sei messo", "hai messo", "ti hai messo"],
      resposta: "ti sei messo",
      explicacao:
        "'Mettersi' (colocar em si mesmo) é reflexivo e usa 'essere'. O pronome vem antes do auxiliar: <b>ti sei messo</b>.",
    },
    {
      pergunta: "4. Quante pagine ______ oggi?",
      opcoes: ["hai letto", "hai leggeto", "sei letto", "leggevi"],
      resposta: "hai letto",
      explicacao:
        "'Leggere' usa 'avere' e tem um particípio passado irregular: <b>letto</b>.",
    },
    {
      pergunta: "5. La settimana scorsa ______ un sacco di lavoro.",
      opcoes: ["avevamo", "eravamo", "abbiamo avuto", "siamo stati"],
      resposta: "abbiamo avuto",
      explicacao:
        "Para indicar um evento concluído ('tivemos muito trabalho'), usa-se o Passato Prossimo do verbo 'avere': <b>abbiamo avuto</b>.",
    },
    {
      pergunta: "6. Appena arrivati, ______ le valigie in camera.",
      opcoes: ["abbiamo messo", "siamo messi", "mettevamo", "abbiamo ponuto"],
      resposta: "abbiamo messo",
      explicacao:
        "'Mettere' usa 'avere'. Seu particípio passado irregular é <b>messo</b>.",
    },
    {
      pergunta: "7. Perché non ______ prima?",
      opcoes: [
        "lo hai detto",
        "hai detto questo",
        "l'hai detto",
        "l'hai dillo",
      ],
      resposta: "l'hai detto",
      explicacao:
        "Quando o pronome de objeto direto ('lo') vem antes do auxiliar 'avere', ele se contrai para <b>l'</b> e o particípio concorda com ele (detto).",
    },
    {
      pergunta: "8. Il film che ______ ieri sera era bellissimo.",
      opcoes: ["siamo visti", "vedevamo", "abbiamo visto", "abbiamo veduto"],
      resposta: "abbiamo visto",
      explicacao:
        "'Vedere' usa 'avere' e seu particípio irregular mais comum é <b>visto</b>.",
    },
    {
      pergunta: "9. Da quando ______ a Roma, la mia vita è cambiata.",
      opcoes: [
        "mi ho trasferito",
        "trasferivo",
        "ho trasferito",
        "mi sono trasferito",
      ],
      resposta: "mi sono trasferito",
      explicacao:
        "O verbo 'trasferirsi' (mudar-se) é reflexivo e, portanto, usa o auxiliar 'essere': <b>mi sono trasferito</b>.",
    },
    {
      pergunta: "10. Non ______ tempo di finire il progetto.",
      opcoes: ["c'era", "ha stato", "è stato", "c'è stato"],
      resposta: "c'è stato",
      explicacao:
        "A expressão 'esserci' no passado se torna <b>c'è stato</b> para indicar que 'não houve tempo', uma ocorrência pontual.",
    },
  ],
  preposizioni: [
    {
      pergunta:
        "1. Smetti ______ lamentarti ______ tutto e prova ______ essere più positivo.",
      opcoes: ["di, di, a", "a, di, a", "di, per, a", "a, su, di"],
      resposta: "di, di, a",
      explicacao:
        "A estrutura correta é 'smettere <b>di</b>', 'lamentarsi <b>di</b>' e 'provare <b>a</b>'.",
    },
    {
      pergunta:
        "2. Non sono abituato ______ alzarmi così presto ______ mattina.",
      opcoes: ["a, la", "di, alla", "ad, la", "ad, alla"],
      resposta: "ad, alla",
      explicacao:
        "A expressão é 'essere abituato <b>a</b>'. Como a palavra seguinte começa com vogal, usa-se a forma eufônica <b>ad</b>. 'Di mattina' ou '<b>alla</b> mattina' são ambas corretas.",
    },
    {
      pergunta:
        "3. Consiste ______ analizzare i dati e ______ trarre conclusioni.",
      opcoes: ["in, a", "nell', nel", "ad, a", "di, di"],
      resposta: "nell', nel",
      explicacao:
        "O verbo 'consistere' rege a preposição <b>in</b>. Como os verbos seguintes estão no infinitivo substantivado, temos IN+LO -> <b>nello</b> (analizzare) e IN+LO -> <b>nel</b> (trarre).",
    },
    {
      pergunta:
        "4. Ho deciso ______ partecipare ______ conferenza ______ Roma.",
      opcoes: ["a, alla, a", "di, a, di", "di, alla, di", "di, alla, a"],
      resposta: "di, alla, a",
      explicacao:
        "A estrutura é 'decidere <b>di</b>', 'partecipare <b>a</b>' (a + la conferenza -> <b>alla</b>) e a cidade de destino usa <b>a</b>.",
    },
    {
      pergunta: "5. Si è arrabbiato ______ me ______ nessun motivo valido.",
      opcoes: ["a, per", "con, di", "con, per", "verso, da"],
      resposta: "con, per",
      explicacao:
        "A estrutura correta é 'arrabbiarsi <b>con</b> qualcuno' e '<b>per</b> un motivo'.",
    },
    {
      pergunta: "6. ______ furia ______ scrivere, ho fatto molti errori.",
      opcoes: ["In, di", "Per la, a", "Nella, di", "Con, per"],
      resposta: "Nella, di",
      explicacao:
        "A expressão idiomática é '(essere) <b>in</b> fretta/furia' (IN+LA -> <b>Nella</b>). A preposição que segue é <b>di</b>: 'furia di scrivere'.",
    },
    {
      pergunta:
        "7. È inutile insistere, non riesco ______ fare ______ meno del caffè.",
      opcoes: ["a, a", "di, di", "a, di", "di, a"],
      resposta: "a, a",
      explicacao:
        "As expressões são 'riuscire <b>a</b> fare qualcosa' e 'fare <b>a</b> meno di qualcosa'.",
    },
    {
      pergunta:
        "8. ______ quanto ne so, il negozio chiude ______ venti minuti.",
      opcoes: ["Da, in", "A, fra", "Per, tra", "Secondo, in"],
      resposta: "Per, tra",
      explicacao:
        "A expressão é '<b>Per</b> quanto ne so' (Pelo que eu sei). Para indicar tempo futuro, usa-se <b>tra</b> ou fra.",
    },
    {
      pergunta: "9. Si è laureato ______ medicina ______ pieni voti.",
      opcoes: ["in, con", "di, a", "a, con", "in, a"],
      resposta: "in, a",
      explicacao:
        "'Laurearsi' rege a preposição <b>in</b> para a área de estudo. A expressão para notas máximas é '<b>a</b> pieni voti'.",
    },
    {
      pergunta:
        "10. Non c'è niente ______ fare, bisogna adattarsi ______ situazione.",
      opcoes: ["a, la", "da, alla", "di, la", "da, a"],
      resposta: "da, alla",
      explicacao:
        "A estrutura é 'niente <b>da</b> fare' (sentido passivo). O verbo 'adattarsi' rege a preposição 'a' (A + LA -> <b>alla</b>).",
    },
  ],
  futuro_semplice: [
    {
      pergunta: "1. Finché non ______ le prove, non ______ nulla.",
      opcoes: [
        "vedo, affermo",
        "avrò visto, affermo",
        "vedrò, affermerei",
        "vedrò, affermerò",
      ],
      resposta: "vedrò, affermerò",
      explicacao:
        "Ambas as ações estão no futuro. O futuro irregular de 'vedere' para 'io' é <b>vedrò</b>, e o de 'affermare' (um verbo mais formal) é <b>affermerò</b>.",
    },
    {
      pergunta:
        "2. Chissà quanto ______ quel quadro. Sicuramente non ce lo ______.",
      opcoes: [
        "costa, possiamo",
        "sarebbe costato, potremmo",
        "costerà, potremo permettere",
        "costerà, potremmo permettere",
      ],
      resposta: "costerà, potremo permettere",
      explicacao:
        "A primeira parte é o futuro de suposição (<b>costerà</b>). A segunda é uma consequência futura de 'potersi permettere' para 'noi' (<b>potremo permettere</b>).",
    },
    {
      pergunta: "3. Appena ______ possibile, ______ un viaggio.",
      opcoes: [
        "sarà, intraprenderemo",
        "è, faremo",
        "sarà, faremmo",
        "fosse, faremo",
      ],
      resposta: "sarà, intraprenderemo",
      explicacao:
        "Usa-se o futuro para a condição futura (<b>sarà</b>). 'Intraprendere' (empreender/iniciar) é um sinônimo mais sofisticado para 'fare'. O futuro para 'noi' é <b>intraprenderemo</b>.",
    },
    {
      pergunta:
        "4. Se non ti sbrighi, ______ di nuovo e ______ la coincidenza.",
      opcoes: [
        "fai tardi, perdi",
        "faresti tardi, perderesti",
        "farai tardi, perderai",
        "farai tardi, perderei",
      ],
      resposta: "farai tardi, perderai",
      explicacao:
        "Ambas são consequências futuras de uma ação presente. A conjugação para 'tu' no futuro é <b>farai</b> e <b>perderai</b>.",
    },
    {
      pergunta: "5. Col tempo, ______ che ______ ragione io.",
      opcoes: [
        "capisci, ho",
        "capirai, avrò",
        "capiresti, avessi",
        "capirai, avevo",
      ],
      resposta: "capirai, avevo",
      explicacao:
        "A ação de entender ocorrerá no futuro (<b>capirai</b>), mas se refere a um fato do passado ('que eu tinha razão'), que se expressa com o Imperfetto (<b>avevo</b>).",
    },
    {
      pergunta: "6. Da grande, mio figlio ______ l'architetto, ne sono sicura.",
      opcoes: ["sarà", "farà", "diventerà", "vorrà fare"],
      resposta: "farà",
      explicacao:
        "Para profissões, a construção mais comum e idiomática em italiano é com o verbo 'fare': 'fare l'architetto', 'fare il medico', etc. O futuro é <b>farà</b>.",
    },
    {
      pergunta:
        "7. Non ti preoccupare, quando ______ il momento, ______ cosa dire.",
      opcoes: [
        "verrà, saprai",
        "viene, sai",
        "verrà, sapresti",
        "venisse, saprai",
      ],
      resposta: "verrà, saprai",
      explicacao:
        "Ambas ações no futuro. 'Venire' e 'sapere' são irregulares. As formas para 'tu' e 'lui' são <b>verrà</b> e <b>saprai</b>.",
    },
    {
      pergunta: "8. Promettimi che ______ qualunque cosa accada.",
      opcoes: ["rimani", "rimarrai", "rimarresti", "rimanga"],
      resposta: "rimarrai",
      explicacao:
        "O verbo 'rimanere' tem um futuro irregular. A forma para 'tu' é <b>rimarrai</b>.",
    },
    {
      pergunta: "9. Non so come, ma prima o poi ne ______ fuori.",
      opcoes: ["verremo", "veniamo", "saremo venuti", "verremmo"],
      resposta: "verremo",
      explicacao:
        "A expressão 'venirne fuori' significa 'sair de uma situação difícil'. O futuro irregular de 'venire' para 'noi' é <b>verremo</b>.",
    },
    {
      pergunta:
        "10. A giudicare dal traffico, ______ un'altra volta in ritardo.",
      opcoes: ["arriviamo", "saremo arrivati", "arriveremo", "arriveremmo"],
      resposta: "arriveremo",
      explicacao:
        "Este é um futuro que expressa uma dedução lógica, quase uma certeza. A forma para 'noi' é <b>arriveremo</b>.",
    },
  ],
  preposizioni_articolate: [
    {
      pergunta:
        "1. La discussione verte ______ argomenti trattati ______ riunione.",
      opcoes: ["su, in", "sugli, nella", "degli, alla", "agli, della"],
      resposta: "sugli, nella",
      explicacao:
        "O verbo 'vertere' (tratar de) rege a preposição 'su' (SU+GLI -> <b>sugli</b>). O local 'nella riunione' usa IN+LA -> <b>nella</b>.",
    },
    {
      pergunta:
        "2. Ho messo il quadro sopra ______ camino, proprio ______ angolo.",
      opcoes: ["al, nell'", "il, l'", "al, all'", "il, nell'"],
      resposta: "al, nell'",
      explicacao:
        "A expressão é 'sopra <b>a</b>l camino'. A preposição para 'angolo' é 'in' (IN+L' -> <b>nell'</b>).",
    },
    {
      pergunta:
        "3. La qualità ______ ingredienti influisce ______ sapore finale.",
      opcoes: ["dei, al", "degli, al", "dei, sul", "degli, sul"],
      resposta: "degli, sul",
      explicacao:
        "A qualidade '<b>di</b>' (DI+GLI -> <b>degli</b>) e 'influire <b>su</b>' (SU+IL -> <b>sul</b>).",
    },
    {
      pergunta:
        "4. Il sentiero si snoda ______ bosco fino ______ cima ______ montagna.",
      opcoes: [
        "in, a, di",
        "attraverso il, sulla, della",
        "nel, sulla, della",
        "nel, alla, della",
      ],
      resposta: "nel, alla, della",
      explicacao:
        "'Snodarsi <b>in</b>' (IN+IL -> <b>nel</b>), 'fino <b>a</b>' (A+LA -> <b>alla</b>) e 'la cima <b>di</b>' (DI+LA -> <b>della</b>).",
    },
    {
      pergunta:
        "5. L'ho incontrato per caso ______ ufficio postale, vicino ______ sportelli.",
      opcoes: ["all', ai", "nell', ai", "all', dai", "all', agli"],
      resposta: "all', agli",
      explicacao:
        "O local é '<b>a</b>ll'ufficio postale' (A+L' -> <b>all'</b>). 'Vicino <b>a</b>gli sportelli' (A+GLI -> <b>agli</b>).",
    },
    {
      pergunta:
        "6. La passione ______ antichi Romani è evidente ______ rovine del Foro.",
      opcoes: [
        "degli, nelle",
        "per gli, dalle",
        "per gli, nelle",
        "degli, dalle",
      ],
      resposta: "per gli, nelle",
      explicacao:
        "A paixão '<b>per</b>' (PER+GLI -> <b>per gli</b>). As evidências estão '<b>in</b>' (IN+LE -> <b>nelle</b>).",
    },
    {
      pergunta:
        "7. Il rispetto ______ anziani è un valore fondamentale ______ nostra società.",
      opcoes: [
        "per gli, nella",
        "degli, della",
        "verso gli, della",
        "per gli, della",
      ],
      resposta: "per gli, nella",
      explicacao:
        "Usa-se 'rispetto <b>per</b>' (PER+GLI -> <b>per gli</b>). O local é '<b>in</b>' (IN+LA -> <b>nella</b>).",
    },
    {
      pergunta:
        "8. Sono dovuto ricorrere ______ avvocato per un problema ______ condominio.",
      opcoes: ["dal, di", "all', di", "dall', del", "all', del"],
      resposta: "all', del",
      explicacao:
        "'Ricorrere <b>a</b>' (A+L' -> <b>all'</b>). O problema é '<b>di</b>' (DI+IL -> <b>del</b>).",
    },
    {
      pergunta:
        "9. L'attenzione ______ dettagli fa la differenza ______ risultato.",
      opcoes: ["dei, sul", "ai, nel", "per i, del", "ai, sul"],
      resposta: "ai, nel",
      explicacao:
        "A atenção '<b>a</b>' (A+I -> <b>ai</b>). A diferença está '<b>in</b>' (IN+IL -> <b>nel</b>).",
    },
    {
      pergunta:
        "10. La traduzione ______ Odissea è stata affidata ______ esperti del settore.",
      opcoes: ["dall', agli", "dell', ai", "dall', ai", "dell', agli"],
      resposta: "dell', agli",
      explicacao:
        "A tradução '<b>di</b>' (DI+L' -> <b>dell'</b>). Foi confiada '<b>a</b>' (A+GLI -> <b>agli</b>).",
    },
  ],
  imperfetto: [
    {
      pergunta:
        "1. Ogni volta che ______ a trovarla, lei mi ______ una fetta di torta.",
      opcoes: [
        "andavo, offriva",
        "sono andato, ha offerto",
        "andavo, ha offerto",
        "andai, offrì",
      ],
      resposta: "andavo, offriva",
      explicacao:
        "Ambas as ações eram habituais e repetidas no passado. Portanto, ambas exigem o Imperfetto: <b>andavo, offriva</b>.",
    },
    {
      pergunta:
        "2. Non ______ cosa fare, perché nessuno mi ______ istruzioni precise.",
      opcoes: [
        "sapevo, dava",
        "ho saputo, ha dato",
        "sapevo, aveva dato",
        "sapevo, ha dato",
      ],
      resposta: "sapevo, aveva dato",
      explicacao:
        "O não saber era um estado contínuo (<b>sapevo</b>). A falta de instruções era um estado resultante de uma ação anterior (ou falta dela), pedindo o Trapassato Prossimo (<b>aveva dato</b>).",
    },
    {
      pergunta:
        "3. Mentre ______ il progetto, ______ che i calcoli ______ sbagliati.",
      opcoes: [
        "rivedevo, mi accorgevo, erano",
        "ho rivisto, mi sono accorto, sono stati",
        "rivedevo, mi accorgevo, furono",
        "rivedevo, mi sono accorto, erano",
      ],
      resposta: "rivedevo, mi sono accorto, erano",
      explicacao:
        "A revisão era contínua (<b>rivedevo</b>). A percepção do erro foi um ato pontual (<b>mi sono accorto</b>). O estado dos cálculos era uma descrição (<b>erano</b>).",
    },
    {
      pergunta: "4. ______ un freddo pungente e la neve ______ fitta.",
      opcoes: [
        "Ha fatto, è scesa",
        "Faceva, è scesa",
        "Fece, scese",
        "Faceva, scendeva",
      ],
      resposta: "Faceva, scendeva",
      explicacao:
        "Ambas as frases descrevem o cenário e as condições meteorológicas contínuas no passado. Ambas usam o Imperfetto.",
    },
    {
      pergunta:
        "5. ______ l'intenzione di chiamarti, ma poi ______ un imprevisto.",
      opcoes: [
        "Ho avuto, c'era",
        "Avevo, c'era",
        "Ebbi, fu",
        "Avevo, c'è stato",
      ],
      resposta: "Avevo, c'è stato",
      explicacao:
        "A intenção era um estado mental contínuo (<b>Avevo</b>). O imprevisto foi um evento pontual que ocorreu (<b>c'è stato</b>).",
    },
    {
      pergunta: "6. Il film non mi ______ per niente; infatti, a metà, ______.",
      opcoes: [
        "è piaciuto, me ne andavo",
        "piaceva, me ne sono andato",
        "piaceva, andavo via",
        "mi piaceva, sono andato",
      ],
      resposta: "piaceva, me ne sono andato",
      explicacao:
        "A descrição do sentimento sobre o filme é contínua (<b>piaceva</b>). A ação de ir embora foi um ato único e conclusivo (<b>me ne sono andato</b>).",
    },
    {
      pergunta: "7. Da giovani, ______ spesso in montagna e ______ per ore.",
      opcoes: [
        "andavamo, camminavamo",
        "siamo andati, abbiamo camminato",
        "andavamo, abbiamo camminato",
        "andammo, camminammo",
      ],
      resposta: "andavamo, camminavamo",
      explicacao:
        "'Da giovani' indica um período de tempo habitual no passado. Ambas as ações eram repetidas e, portanto, usam o Imperfetto.",
    },
    {
      pergunta: "8. Appena ______ gli occhi, ______ che ______ tardissimo.",
      opcoes: [
        "aprivo, capivo, era",
        "ho aperto, capivo, fu",
        "ho aperto, ho capito, era",
        "aprii, compresi, era",
      ],
      resposta: "ho aperto, ho capito, era",
      explicacao:
        "As ações de abrir os olhos e entender são pontuais e sequenciais (<b>ho aperto, ho capito</b>). O estado da hora ('era tardi') é uma descrição (<b>era</b>).",
    },
    {
      pergunta:
        "9. Si ______ che lui ______ la persona giusta, ma poi ______ un'altra persona.",
      opcoes: [
        "pensava, era, si è rivelato",
        "pensava, fosse, si rivelava",
        "si pensava, fosse, si è rivelato",
        "si pensava, era, si è rivelato",
      ],
      resposta: "si pensava, fosse, si è rivelato",
      explicacao:
        "Desafio B1/B2! A crença geral usa o Imperfetto impessoal (<b>si pensava</b>). A hipótese ou dúvida rege o Congiuntivo Imperfetto (<b>fosse</b>). A revelação final foi pontual (<b>si è rivelato</b>).",
    },
    {
      pergunta:
        "10. ______ un'atmosfera tesa: nessuno ______ e tutti ______ il respiro.",
      opcoes: [
        "C'è stata, parlava, tratteneva",
        "C'era, ha parlato, ha trattenuto",
        "Ci fu, parlò, trattenne",
        "C'era, parlava, tratteneva",
      ],
      resposta: "C'era, parlava, tratteneva",
      explicacao:
        "Toda a frase é uma pura descrição de um cenário contínuo no passado. Todas as ações descrevem o estado da situação e usam o Imperfetto.",
    },
  ],
  falsi_amici: [
    {
      pergunta: "1. Quel dolce era ______, complimenti allo chef!",
      opcoes: ["strano", "squisito", "bizzarro", "particolare"],
      resposta: "squisito",
      explicacao:
        "Para 'delicioso', a palavra correta é <b>squisito</b>. 'Strano' ou 'bizzarro' seriam ofensas!",
    },
    {
      pergunta: "2. Devo ______ le scale per arrivare al mio appartamento.",
      opcoes: ["salire", "partire", "uscire", "saltare"],
      resposta: "salire",
      explicacao:
        "<b>Salire</b> significa 'subir'. 'Sair' em italiano é 'uscire'.",
    },
    {
      pergunta: "3. Al mattino mi piace il pane con ______ e marmellata.",
      opcoes: ["burro", "asino", "olio", "grasso"],
      resposta: "burro",
      explicacao:
        "<b>Burro</b> em italiano significa 'manteiga'. O animal 'burro' é 'asino'.",
    },
    {
      pergunta: "4. Ho una riunione importante, spero di arrivare in ______.",
      opcoes: ["anticipo", "orario", "tempo", "fretta"],
      resposta: "orario",
      explicacao:
        "'Chegar na hora' se diz 'arrivare in <b>orario</b>'. 'In tempo' significa 'a tempo', 'antes que seja tarde demais'.",
    },
    {
      pergunta: "5. Dopo la partita, mi fa male la ______ destra.",
      opcoes: ["gamba", "schiena", "spalla", "gambero"],
      resposta: "gamba",
      explicacao:
        "<b>Gamba</b> em italiano significa 'perna'. 'Gambero' é camarão.",
    },
    {
      pergunta: "6. Non prendere quella strada, è una ______ senza uscita.",
      opcoes: ["via", "strada", "trappola", "scorciatoia"],
      resposta: "strada",
      explicacao:
        "<b>Strada</b> é a palavra genérica para 'rua' ou 'estrada'. 'Via' geralmente se refere a ruas dentro de uma cidade.",
    },
    {
      pergunta: "7. Ho comprato una ______ di vino rosso per la cena.",
      opcoes: ["bottiglia", "caraffa", "damigiana", "brocca"],
      resposta: "bottiglia",
      explicacao: "'Garrafa' de vinho é <b>bottiglia</b>.",
    },
    {
      pergunta: "8. Mi passi l'______ per condire l'insalata?",
      opcoes: ["olio", "aceto", "sale", "pepe"],
      resposta: "olio",
      explicacao:
        "<b>Olio</b> em italiano se refere principalmente ao azeite de oliva ('olio d'oliva').",
    },
    {
      pergunta: "9. Non capisco la tua ______, potresti essere più chiaro?",
      opcoes: ["domanda", "questione", "richiesta", "interrogazione"],
      resposta: "domanda",
      explicacao:
        "A 'pergunta' que se faz oralmente é uma <b>domanda</b>. 'Questione' é um assunto, um problema.",
    },
    {
      pergunta: "10. Vado ______ in palestra, circa tre volte a settimana.",
      opcoes: ["spesso", "sempre", "raramente", "a volte"],
      resposta: "spesso",
      explicacao:
        "<b>Spesso</b> significa 'frequentemente'. 'Espesso' em italiano seria 'spesso' também, mas para texturas (ex: un muro spesso).",
    },
  ],
  congiuntivo_presente: [
    {
      pergunta: "1. Sebbene Marco ______ molto, non ______ mai stanco.",
      opcoes: [
        "lavori, sembra",
        "lavora, sembri",
        "lavori, sembri",
        "lavora, sembra",
      ],
      resposta: "lavori, sembri",
      explicacao:
        "A conjunção 'sebbene' (embora) exige o subjuntivo. A forma correta para 'Marco' (lui) é <b>lavori</b> e <b>sembri</b>.",
    },
    {
      pergunta:
        "2. È l'unica persona che ______ come risolvere questo problema.",
      opcoes: ["sa", "saprebbe", "abbia saputo", "sappia"],
      resposta: "sappia",
      explicacao:
        "Expressões de unicidade como 'è l'unico che...' são seguidas pelo subjuntivo. A forma irregular de 'sapere' para 'lui/lei' é <b>sappia</b>.",
    },
    {
      pergunta:
        "3. Voglio che voi ______ tutto il necessario prima di partire.",
      opcoes: ["prendete", "prenderete", "prendeste", "prendiate"],
      resposta: "prendiate",
      explicacao:
        "O verbo 'volere che...' exige o subjuntivo. A forma para 'voi' de 'prendere' é <b>prendiate</b>.",
    },
    {
      pergunta: "4. Qualunque cosa tu ______, io sarò dalla tua parte.",
      opcoes: ["decidi", "decida", "deciderai", "avessi deciso"],
      resposta: "decida",
      explicacao:
        "Pronomes indefinidos como 'qualunque cosa' (qualquer coisa que) são seguidos pelo subjuntivo. A forma para 'tu' é <b>decida</b>.",
    },
    {
      pergunta: "5. Si teme che il treno ______ in ritardo.",
      opcoes: ["è", "fosse", "sarà", "sia"],
      resposta: "sia",
      explicacao:
        "Verbos que expressam medo ou temor, como 'temere che...', pedem o subjuntivo. A forma de 'essere' é <b>sia</b>.",
    },
    {
      pergunta:
        "6. A meno che non ______ tu, non so chi altro potrebbe aiutarmi.",
      opcoes: ["vieni", "verrà", "venisse", "venga"],
      resposta: "venga",
      explicacao:
        "A conjunção 'a meno che non' (a menos que) é sempre seguida pelo subjuntivo. A forma de 'venire' é <b>venga</b>.",
    },
    {
      pergunta: "7. Mi aspetto che tu ______ più responsabile.",
      opcoes: ["sia", "sei", "sarai", "fossi"],
      resposta: "sia",
      explicacao:
        "Verbos de expectativa como 'aspettarsi che...' exigem o subjuntivo. A forma de 'essere' para 'tu' é <b>sia</b>.",
    },
    {
      pergunta: "8. È strano che loro non ______ ancora risposto.",
      opcoes: ["hanno", "avessero", "avranno", "abbiano"],
      resposta: "abbiano",
      explicacao:
        "Expressões impessoais que indicam um julgamento subjetivo ('è strano che...') pedem o subjuntivo. A forma de 'avere' para 'loro' é <b>abbiano</b>.",
    },
    {
      pergunta: "9. Esco con voi, a patto che non si ______ troppo tardi.",
      opcoes: ["fa", "farà", "facesse", "faccia"],
      resposta: "faccia",
      explicacao:
        "A conjunção 'a patto che' (contanto que) exige o subjuntivo. A forma impessoal de 'fare' é <b>faccia</b>.",
    },
    {
      pergunta:
        "10. Pensavo che il film ______ più interessante, ma mi sbagliavo.",
      opcoes: ["era", "sarebbe stato", "sia", "fosse"],
      resposta: "fosse",
      explicacao:
        "Desafio B2! Como a frase principal está no passado ('Pensavo'), o subjuntivo deve estar no Imperfeito: <b>fosse</b>.",
    },
  ],
  modi_di_dire: [
    {
      pergunta: "1. Hai un esame importante domani? Allora, ______!",
      opcoes: [
        "rompi una gamba",
        "buona fortuna",
        "in bocca al lupo",
        "auguri",
      ],
      resposta: "in bocca al lupo",
      explicacao:
        "<b>In bocca al lupo!</b> é a forma idiomática e mais comum para desejar boa sorte em situações de desafio. A resposta correta é 'Crepi!'.",
    },
    {
      pergunta:
        "2. Quel politico parla molto ma non conclude niente. È tutto ______.",
      opcoes: ["arrosto", "fumo negli occhi", "succo del discorso", "brodo"],
      resposta: "fumo negli occhi",
      explicacao:
        "<b>Fumo negli occhi</b> (fumaça nos olhos) é uma expressão para algo que parece bom, mas é enganoso e sem substância.",
    },
    {
      pergunta: "3. Ho lavorato 12 ore di fila, sono veramente ______.",
      opcoes: ["cotto", "stanco morto", "a pezzi", "distrutto"],
      resposta: "a pezzi",
      explicacao:
        "Todas as opções significam 'muito cansado', mas <b>essere a pezzi</b> (estar em pedaços) é uma expressão idiomática muito forte e comum.",
    },
    {
      pergunta: "4. Non so decidere, ho ______: non so se accettare o no.",
      opcoes: [
        "un'idea fissa",
        "la pulce nell'orecchio",
        "il dente avvelenato",
        "l'imbarazzo della scelta",
      ],
      resposta: "l'imbarazzo della scelta",
      explicacao:
        "<b>Avere l'imbarazzo della scelta</b> significa ter tantas opções boas que é difícil escolher. É uma expressão positiva.",
    },
    {
      pergunta: "5. Smettila di lamentarti! Stai cercando ______.",
      opcoes: [
        "il bandolo della matassa",
        "il pelo nell'uovo",
        "l'ago nel pagliaio",
        "la quadratura del cerchio",
      ],
      resposta: "il pelo nell'uovo",
      explicacao:
        "<b>Cercare il pelo nell'uovo</b> (procurar o pelo no ovo) significa ser excessivamente meticuloso ou procurar defeitos mínimos.",
    },
    {
      pergunta: "6. Ha capito che avevo mentito, mi ha ______ subito.",
      opcoes: ["beccato", "sgamato", "scoperto", "visto"],
      resposta: "sgamato",
      explicacao:
        "<b>Sgamare</b> é um termo coloquial muito comum que significa 'pegar no flagra', 'sacar' a verdade ou um truque.",
    },
    {
      pergunta: "7. Non ti fidare di lui, è conosciuto per ______.",
      opcoes: [
        "fare la spia",
        "menare il can per l'aia",
        "tirare il pacco",
        "vendere fumo",
      ],
      resposta: "tirare il pacco",
      explicacao:
        "<b>Tirare il pacco</b> é uma gíria que significa não cumprir um combinado, dar um 'bolo' ou um calote.",
    },
    {
      pergunta: "8. Dopo la sua promozione, si è un po' ______. ",
      opcoes: [
        "dato delle arie",
        "alzato la cresta",
        "montato la testa",
        "sentito un re",
      ],
      resposta: "montato la testa",
      explicacao:
        "<b>Montarsi la testa</b> é a expressão mais comum para dizer que alguém ficou arrogante ou convencido depois de um sucesso.",
    },
    {
      pergunta: "9. Non devi dirmi tutto nei minimi dettagli, vai ______.",
      opcoes: ["al dunque", "al punto", "al centro", "al sodo"],
      resposta: "al sodo",
      explicacao:
        "<b>Andare al sodo</b> (ir para o sólido) significa ir direto ao ponto, focar no essencial da questão.",
    },
    {
      pergunta:
        "10. Ho provato a spiegarglielo in tutti i modi, ma è come ______.",
      opcoes: [
        "parlare al muro",
        "predicare nel deserto",
        "fare un buco nell'acqua",
        "piangere sul latte versato",
      ],
      resposta: "parlare al muro",
      explicacao:
        "<b>Parlare al muro</b> (falar com a parede) é a expressão perfeita para quando se fala com alguém que não escuta ou não entende.",
    },
  ],
  condizionale_presente: [
    {
      pergunta: "1. Se ______ tempo, ______ a trovarti.",
      opcoes: [
        "avessi, verrei",
        "avrei, venissi",
        "avevo, verrei",
        "avessi, venivo",
      ],
      resposta: "avessi, verrei",
      explicacao:
        "Este é o 'Periodo Ipotetico della possibilità' (tipo 2). A condição 'Se...' usa o Congiuntivo Imperfetto (<b>avessi</b>), e a consequência usa o Condizionale Presente (<b>verrei</b>).",
    },
    {
      pergunta: "2. Scusi, ______ dirmi che ore sono?",
      opcoes: ["sapesse", "sa", "saprà", "saprebbe"],
      resposta: "saprebbe",
      explicacao:
        "Para um pedido muito formal e educado, usa-se o Condicional de 'sapere': <b>saprebbe</b>. É mais polido que 'sa'.",
    },
    {
      pergunta: "3. Al posto loro, non ______ quella decisione affrettata.",
      opcoes: ["avrei preso", "prenderei", "avessi preso", "prendevo"],
      resposta: "avrei preso",
      explicacao:
        "Desafio! A ação se refere a uma decisão já tomada no passado. Portanto, é um conselho sobre o passado, usando o Condicional Passado: <b>avrei preso</b>.",
    },
    {
      pergunta: "4. Mi ______ un grande favore se tu ______ silenzio.",
      opcoes: [
        "faresti, fai",
        "fai, facessi",
        "faresti, facessi",
        "facessi, faresti",
      ],
      resposta: "faresti, facessi",
      explicacao:
        "Outro período ipotético. A consequência é expressa com o Condicional ('tu mi <b>faresti</b> un favore'), e a condição hipotética com o Congiuntivo Imperfetto ('se tu <b>facessi</b> silenzio').",
    },
    {
      pergunta: "5. Non ______ mai immaginare una vita senza musica.",
      opcoes: ["potrei", "posso", "potessi", "potrò"],
      resposta: "potrei",
      explicacao:
        "Expressa uma impossibilidade hipotética. O Condicional de 'potere' para 'io' é <b>potrei</b>.",
    },
    {
      pergunta: "6. Se fossi in te, gliene ______ subito.",
      opcoes: ["parlassi", "parlo", "parlerei", "avrò parlato"],
      resposta: "parlerei",
      explicacao:
        "A expressão 'Se fossi in te' (Se eu fosse você) sempre introduz uma consequência no Condicional Presente: <b>parlerei</b>.",
    },
    {
      pergunta: "7. Sapevo che ______ d'accordo con me.",
      opcoes: ["eri", "fossi", "saresti", "saresti stato"],
      resposta: "saresti stato",
      explicacao:
        "Este é o 'futuro no passado'. Do ponto de vista do passado ('Sapevo'), a concordância era uma ação futura. Usa-se o Condicional Passado: <b>saresti stato</b>.",
    },
    {
      pergunta: "8. Cosa ______ senza di me?",
      opcoes: ["fai", "facessi", "faresti", "farai"],
      resposta: "faresti",
      explicacao:
        "Pergunta retórica que implica uma condição ('se eu não estivesse aqui'). A forma correta é o Condicional: <b>faresti</b>.",
    },
    {
      pergunta:
        "9. Se vincessi alla lotteria, ______ il giro del mondo e non ______ più.",
      opcoes: [
        "facessi, lavorassi",
        "farò, lavorerò",
        "farei, lavorassi",
        "farei, lavorerei",
      ],
      resposta: "farei, lavorerei",
      explicacao:
        "Outro período ipotético (tipo 2). A condição está no Congiuntivo ('vincessi'), então ambas as consequências devem estar no Condicional: <b>farei, lavorerei</b>.",
    },
    {
      pergunta: "10. Me lo ______ se lo sapessi, ma non ne ho idea.",
      opcoes: ["diresti", "dicessi", "dici", "direi"],
      resposta: "direi",
      explicacao:
        "A frase completa seria: 'Te lo <b>direi</b> se lo <b>sapessi</b>'. A parte que falta é a consequência da hipótese, que usa o Condicional.",
    },
  ],
};
