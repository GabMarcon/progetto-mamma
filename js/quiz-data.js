const quizzes = {
  presente_indicativo: [
    {
      pergunta: "1. Non ______ mai cosa ______, è troppo indecisa.",
      opcoes: [
        "sa, sceglie",
        "conosce, scegli",
        "sa, scegliere",
        "conosce, sceglie",
      ],
      resposta: "sa, sceglie",
      explicacao:
        "Usa-se 'sapere' (<b>sa</b>) para uma informação e o verbo 'scegliere' (escolher) conjugado na terceira pessoa (<b>sceglie</b>).",
    },
    {
      pergunta: "2. Noi ______ le conclusioni dai fatti, non dalle opinioni.",
      opcoes: ["traiamo", "tradiamo", "tratteniamo", "traduciamo"],
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
      opcoes: ["si deve", "deve", "dovrebbe", "si trattiene"],
      resposta: "si deve",
      explicacao:
        "A expressão 'dovuto a' indica causa. Na forma impessoal, usa-se o reflexivo: 'a cosa <b>si deve</b>?' (a que se deve?).",
    },
    {
      pergunta: "5. Loro ______ a rispettare le scadenze.",
      opcoes: ["tengono", "ottengono", "mantengono", "appartengono"],
      resposta: "tengono",
      explicacao:
        "A expressão 'tenere a qualcosa' significa 'dar importância a algo'. A conjugação para 'loro' de 'tenere' é <b>tengono</b>.",
    },
    {
      pergunta: "6. Tu ______ il discorso e io ______ gli appunti.",
      opcoes: ["fai, prendo", "fai, tengo", "fai, scrivo", "dici, prendo"],
      resposta: "fai, prendo",
      explicacao:
        "As expressões corretas são 'fare un discorso' (fazer um discurso) e 'prendere appunti' (fazer anotações). As conjugações são <b>fai</b> e <b>prendo</b>.",
    },
    {
      pergunta: "7. Io non ______ più le sue bugie, me ne ______.",
      opcoes: [
        "credo, vado",
        "sopporto, vado",
        "reggo, vado",
        "sostengo, parto",
      ],
      resposta: "reggo, vado",
      explicacao:
        "A expressão 'non reggere più' significa 'não aguentar mais'. 'Andarsene' (ir embora) se conjuga como <b>me ne vado</b>.",
    },
    {
      pergunta: "8. A quest'ora, di solito, il sole ______ già.",
      opcoes: ["sorge", "sale", "spunta", "appare"],
      resposta: "sorge",
      explicacao:
        "O verbo específico para o nascer do sol é 'sorgere'. A conjugação na terceira pessoa é <b>sorge</b>.",
    },
    {
      pergunta: "9. Se non ti ______ bene, ______ a casa.",
      opcoes: [
        "senti, rimani",
        "senti, resta",
        "senti, stai",
        "ascolti, rimani",
      ],
      resposta: "senti, rimani",
      explicacao:
        "'Sentirsi bene' é a expressão para se sentir bem. 'Rimanere a casa' é a expressão para ficar em casa. As formas para 'tu' são <b>senti</b> e <b>rimani</b>.",
    },
    {
      pergunta: "10. Questo quadro ______ un grande valore affettivo per me.",
      opcoes: ["possiede", "detiene", "contiene", "ha"],
      resposta: "possiede",
      explicacao:
        "Embora 'ha' não seja incorreto, <b>possiede</b> (de 'possedere') é um verbo mais preciso e sofisticado para indicar posse de valor ou qualidades.",
    },
  ],
  passato_prossimo: [
    {
      pergunta: "1. Appena ______ la notizia, ti ho chiamato.",
      opcoes: ["ho saputo", "sapevo", "ho conosciuto", "conoscevo"],
      resposta: "ho saputo",
      explicacao:
        "No passado, 'sapere' no Passato Prossimo (<b>ho saputo</b>) significa 'descobrir/ficar sabendo', uma ação pontual. 'Sapevo' (Imperfetto) significaria 'eu já sabia'.",
    },
    {
      pergunta:
        "2. Le tue amiche non ______ perché ______ male tutto il giorno.",
      opcoes: [
        "sono uscite, sono state",
        "hanno uscito, hanno stato",
        "sono uscite, hanno state",
        "uscivano, stavano",
      ],
      resposta: "sono uscite, sono state",
      explicacao:
        "Ambos os verbos ('uscire' e 'stare') usam o auxiliar 'essere'. O particípio deve concordar com o sujeito feminino plural: <b>siamo uscite, sono state</b>.",
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
      opcoes: ["abbiamo avuto", "siamo stati", "avevamo", "eravamo"],
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
        "l'hai detto",
        "lo hai detto",
        "hai detto questo",
        "l'hai dillo",
      ],
      resposta: "l'hai detto",
      explicacao:
        "Quando o pronome de objeto direto ('lo') vem antes do auxiliar 'avere', ele se contrai para <b>l'</b> e o particípio concorda com ele (detto).",
    },
    {
      pergunta: "8. Il film che ______ ieri sera era bellissimo.",
      opcoes: ["abbiamo visto", "siamo visti", "vedevamo", "abbiamo veduto"],
      resposta: "abbiamo visto",
      explicacao:
        "'Vedere' usa 'avere' e seu particípio irregular mais comum é <b>visto</b>.",
    },
    {
      pergunta: "9. Da quando ______ a Roma, la mia vita è cambiata.",
      opcoes: [
        "mi sono trasferito",
        "mi ho trasferito",
        "trasferivo",
        "ho trasferito",
      ],
      resposta: "mi sono trasferito",
      explicacao:
        "O verbo 'trasferirsi' (mudar-se) é reflexivo e, portanto, usa o auxiliar 'essere': <b>mi sono trasferito</b>.",
    },
    {
      pergunta: "10. Non ______ tempo di finire il progetto.",
      opcoes: ["c'è stato", "c'era", "ha stato", "è stato"],
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
      opcoes: ["ad, alla", "a, la", "di, alla", "ad, la"],
      resposta: "ad, alla",
      explicacao:
        "A expressão é 'essere abituato <b>a</b>'. Como a palavra seguinte começa com vogal, usa-se a forma eufônica <b>ad</b>. 'Di mattina' ou '<b>alla</b> mattina' são ambas corretas.",
    },
    {
      pergunta:
        "3. Consiste ______ analizzare i dati e ______ trarre conclusioni.",
      opcoes: ["nell', nel", "in, a", "ad, a", "di, di"],
      resposta: "nell', nel",
      explicacao:
        "O verbo 'consistere' rege a preposição <b>in</b>. Como os verbos seguintes estão no infinitivo substantivado, temos IN+LO -> <b>nello</b> (analizzare) e IN+LO -> <b>nel</b> (trarre).",
    },
    {
      pergunta:
        "4. Ho deciso ______ partecipare ______ conferenza ______ Roma.",
      opcoes: ["di, alla, di", "a, alla, a", "di, a, di", "di, alla, a"],
      resposta: "di, alla, a",
      explicacao:
        "A estrutura é 'decidere <b>di</b>', 'partecipare <b>a</b>' (a + la conferenza -> <b>alla</b>) e a cidade de destino usa <b>a</b>.",
    },
    {
      pergunta: "5. Si è arrabbiato ______ me ______ nessun motivo valido.",
      opcoes: ["con, per", "a, per", "con, di", "verso, da"],
      resposta: "con, per",
      explicacao:
        "A estrutura correta é 'arrabbiarsi <b>con</b> qualcuno' e '<b>per</b> un motivo'.",
    },
    {
      pergunta: "6. ______ furia ______ scrivere, ho fatto molti errori.",
      opcoes: ["Nella, di", "In, di", "Per la, a", "Con, per"],
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
      opcoes: ["Per, tra", "Da, in", "A, fra", "Secondo, in"],
      resposta: "Per, tra",
      explicacao:
        "A expressão é '<b>Per</b> quanto ne so' (Pelo que eu sei). Para indicar tempo futuro, usa-se <b>tra</b> ou fra.",
    },
    {
      pergunta: "9. Si è laureato ______ medicina ______ pieni voti.",
      opcoes: ["in, a", "a, con", "in, con", "di, a"],
      resposta: "in, a",
      explicacao:
        "'Laurearsi' rege a preposição <b>in</b> para a área de estudo. A expressão para notas máximas é '<b>a</b> pieni voti'.",
    },
    {
      pergunta:
        "10. Non c'è niente ______ fare, bisogna adattarsi ______ situazione.",
      opcoes: ["da, alla", "a, la", "di, la", "da, a"],
      resposta: "da, alla",
      explicacao:
        "A estrutura é 'niente <b>da</b> fare' (sentido passivo). O verbo 'adattarsi' rege a preposição 'a' (A + LA -> <b>alla</b>).",
    },
  ],
  futuro_semplice: [
    {
      pergunta: "1. Finché non ______ le prove, non ______ nulla.",
      opcoes: [
        "vedrò, affermerò",
        "vedo, affermo",
        "avrò visto, affermo",
        "vedrò, affermerei",
      ],
      resposta: "vedrò, affermerò",
      explicacao:
        "Ambas as ações estão no futuro. O futuro irregular de 'vedere' para 'io' é <b>vedrò</b>, e o de 'affermare' (um verbo mais formal) é <b>affermerò</b>.",
    },
    {
      pergunta:
        "2. Chissà quanto ______ quel quadro. Sicuramente non ce lo ______.",
      opcoes: [
        "costerà, potremo permettere",
        "costa, possiamo",
        "sarebbe costato, potremmo",
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
        "farai tardi, perderai",
        "fai tardi, perdi",
        "faresti tardi, perderesti",
        "farai tardi, perderei",
      ],
      resposta: "farai tardi, perderai",
      explicacao:
        "Ambas são consequências futuras de uma ação presente. A conjugação para 'tu' no futuro é <b>farai</b> e <b>perderai</b>.",
    },
    {
      pergunta: "5. Col tempo, ______ che ______ ragione io.",
      opcoes: [
        "capirai, avevo",
        "capisci, ho",
        "capirai, avrò",
        "capiresti, avessi",
      ],
      resposta: "capirai, avevo",
      explicacao:
        "A ação de entender ocorrerá no futuro (<b>capirai</b>), mas se refere a um fato do passado ('que eu tinha razão'), que se expressa com o Imperfetto (<b>avevo</b>).",
    },
    {
      pergunta: "6. Da grande, mio figlio ______ l'architetto, ne sono sicura.",
      opcoes: ["farà", "sarà", "diventerà", "vorrà fare"],
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
      opcoes: ["rimarrai", "rimani", "rimarresti", "rimanga"],
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
      opcoes: ["arriveremo", "arriviamo", "saremo arrivati", "arriveremmo"],
      resposta: "arriveremo",
      explicacao:
        "Este é um futuro que expressa uma dedução lógica, quase uma certeza. A forma para 'noi' é <b>arriveremo</b>.",
    },
  ],
  preposizioni_articolate: [
    {
      pergunta:
        "1. La discussione verte ______ argomenti trattati ______ riunione.",
      opcoes: ["sugli, nella", "su, in", "degli, alla", "agli, della"],
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
      opcoes: ["degli, sul", "dei, al", "degli, al", "dei, sul"],
      resposta: "degli, sul",
      explicacao:
        "A qualidade '<b>di</b>' (DI+GLI -> <b>degli</b>) e 'influire <b>su</b>' (SU+IL -> <b>sul</b>).",
    },
    {
      pergunta:
        "4. Il sentiero si snoda ______ bosco fino ______ cima ______ montagna.",
      opcoes: [
        "nel, alla, della",
        "in, a, di",
        "attraverso il, sulla, della",
        "nel, sulla, della",
      ],
      resposta: "nel, alla, della",
      explicacao:
        "'Snodarsi <b>in</b>' (IN+IL -> <b>nel</b>), 'fino <b>a</b>' (A+LA -> <b>alla</b>) e 'la cima <b>di</b>' (DI+LA -> <b>della</b>).",
    },
    {
      pergunta:
        "5. L'ho incontrato per caso ______ ufficio postale, vicino ______ sportelli.",
      opcoes: ["all', agli", "all', ai", "nell', ai", "all', dai"],
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
        "degli, dalle",
        "per gli, nelle",
      ],
      resposta: "per gli, nelle",
      explicacao:
        "A paixão '<b>per</b>' (PER+GLI -> <b>per gli</b>). As evidências estão '<b>in</b>' (IN+LE -> <b>nelle</b>).",
    },
    {
      pergunta:
        "7. Il rispetto ______ anziani è un valore fondamentale ______ nostra società.",
      opcoes: [
        "degli, della",
        "per gli, nella",
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
      opcoes: ["all', del", "dal, di", "all', di", "dall', del"],
      resposta: "all', del",
      explicacao:
        "'Ricorrere <b>a</b>' (A+L' -> <b>all'</b>). O problema é '<b>di</b>' (DI+IL -> <b>del</b>).",
    },
    {
      pergunta:
        "9. L'attenzione ______ dettagli fa la differenza ______ risultato.",
      opcoes: ["ai, nel", "dei, sul", "per i, del", "ai, sul"],
      resposta: "ai, nel",
      explicacao:
        "A atenção '<b>a</b>' (A+I -> <b>ai</b>). A diferença está '<b>in</b>' (IN+IL -> <b>nel</b>).",
    },
    {
      pergunta:
        "10. La traduzione ______ Odissea è stata affidata ______ esperti del settore.",
      opcoes: ["dell', agli", "dall', agli", "dell', ai", "dall', ai"],
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
        "sapevo, aveva dato",
        "sapevo, dava",
        "ho saputo, ha dato",
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
        "rivedevo, mi sono accorto, erano",
        "rivedevo, mi accorgevo, erano",
        "ho rivisto, mi sono accorto, sono stati",
        "rivedevo, mi accorgevo, furono",
      ],
      resposta: "rivedevo, mi sono accorto, erano",
      explicacao:
        "A revisão era contínua (<b>rivedevo</b>). A percepção do erro foi um ato pontual (<b>mi sono accorto</b>). O estado dos cálculos era uma descrição (<b>erano</b>).",
    },
    {
      pergunta: "4. ______ un freddo pungente e la neve ______ fitta.",
      opcoes: [
        "Faceva, scendeva",
        "Ha fatto, è scesa",
        "Faceva, è scesa",
        "Fece, scese",
      ],
      resposta: "Faceva, scendeva",
      explicacao:
        "Ambas as frases descrevem o cenário e as condições meteorológicas contínuas no passado. Ambas usam o Imperfetto.",
    },
    {
      pergunta:
        "5. ______ l'intenzione di chiamarti, ma poi ______ un imprevisto.",
      opcoes: [
        "Avevo, c'è stato",
        "Ho avuto, c'era",
        "Avevo, c'era",
        "Ebbi, fu",
      ],
      resposta: "Avevo, c'è stato",
      explicacao:
        "A intenção era um estado mental contínuo (<b>Avevo</b>). O imprevisto foi um evento pontual que ocorreu (<b>c'è stato</b>).",
    },
    {
      pergunta: "6. Il film non mi ______ per niente; infatti, a metà, ______.",
      opcoes: [
        "piaceva, me ne sono andato",
        "è piaciuto, me ne andavo",
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
        "ho aperto, ho capito, era",
        "aprivo, capivo, era",
        "ho aperto, capivo, fu",
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
        "si pensava, era, si è rivelato",
        "si pensava, fosse, si è rivelato",
      ],
      resposta: "si pensava, fosse, si è rivelato",
      explicacao:
        "Aqui um desafio B1/B2! A crença geral usa o Imperfetto impessoal (<b>si pensava</b>). A hipótese ou dúvida rege o Congiuntivo Imperfetto (<b>fosse</b>). A revelação final foi pontual (<b>si è rivelato</b>).",
    },
    {
      pergunta:
        "10. ______ un'atmosfera tesa: nessuno ______ e tutti ______ il respiro.",
      opcoes: [
        "C'era, parlava, tratteneva",
        "C'è stata, parlava, tratteneva",
        "C'era, ha parlato, ha trattenuto",
        "Ci fu, parlò, trattenne",
      ],
      resposta: "C'era, parlava, tratteneva",
      explicacao:
        "Toda a frase é uma pura descrição de um cenário contínuo no passado. Todas as ações descrevem o estado da situação e usam o Imperfetto.",
    },
  ],
};
