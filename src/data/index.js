const body = {
	glava: {
		id: 'glava',
		name: 'Glava',
		desc: 'Glava',
		image: 'head.png',
		parts: {
			čelo: {
				id: 'čelo',
				name: 'Glavobolja',
				desc: 'protiv glavobolje',
				image: 'headache.png',
				products: [
					{
						id: 1,
						name: 'Sinomel',
						desc: 'BILJNI MELEM ZA SINUSE',
						image: 'sinomel.png',
						purpose:
							'Deluje aktivno i pouzdano protiv uzroka i simptoma akutnog, subakutnog i hroničnog zapaljenja paranazalnih sinusa i rinitisa.Dolazi do prestajanja bola I pritiska u glavi,omogućava normalno disanje,podstiče I olakšava pražnjenje sekreta I otklanja zapaljenje I otok.',
						effects:
							'Preparat ima protivupalno, antibakterijsko, protivgljivično, antivirusno, analgetsko i ekpektoransno dejstvo. Blagotvorno deluje na sluzokožu sinusa, otklanja zapaljenje i otok, otvara prolaze izmedju sinusnih supljina i tako otklanja blokadu otvora sinusa; podstiče pravilan rad cilija koji uklanjaju polutante i neželjeni sadržaj iz obolelih sinusa i nosa, podstče i olakšava pražnjenje sekreta iz sinusa i nosa.'
					},
					{
						id: 2,
						name: 'Migresan',
						desc: 'BILJNE KAPSULE',
						image: 'migresan.png',
						purpose:
							'Migresan biljne kapsule pomažu kod: Migrene,artritisa,artroze,gihta i drugih reumackih oboljenja,menstrualnih bolova i pomaže kod viskoh temperatura.',
						effects:
							'Migresan biljne kapsule sadrže u sebi ekstrakte biljke povratić (Tanacetum parthenium) .Ova biljka sadrže u sebi flavonoide, poliacetilene, seskviterpenske laktone germakranolidnog tipa. Seskviterpenski lakton PARTENOLID se nalazi u najvećem procentu.Iako je delovanje kapsula Migresan određeno mešavinom svih sastojaka ekstrakta, PARTENOLID pokazuje najveću farmakološku aktivnost i nosilac je antimigrenoznog delovanja.'
					},
					{
						id: 3,
						name: 'Kora Vrbe',
						desc: 'čaj',
						image: 'kora-vrbe.png',
						purpose:
							'Za preznojavanje - kod povišene telesne temperature, kod prehlade i gripa, za ublažavanje reumatskih bolova, kod glavobolje i migrene. Za spoljnu upotrebu, ispiranje čajem od kore vrbe preporučuje se za ubrzanje zarastanja rana.',
						effects: '',
						limits:
							'Upotreba čaja od kore vrbe se ne preporučuje tokom trudnoće i dojenja kao ni deci mlađoj od 12 godina.'
					},
					{
						id: 4,
						name: 'Cvet gloga sa listom',
						desc: 'Čaj',
						image: 'glog.png',
						purpose:
							'Cvet i ekstrakti gloga imaju blagotvorno dejstvo na cirkulaciju i ublažavanje nervne napetosti, tako da se njihova upotreba preporučuje kod migrena i glavobolja uzrokovanih stresom.'
					},
					{
						id: 5,
						name: 'List zelenog čaja',
						desc: 'Čaj',
						image: 'zelenicaj.png',
						purpose:
							'Uz visoki sadržaj anti-oksidanasa sadrži tein, jedinjenje koje blagotvorno deluje na ublažavanje varijacija u vazokonstrikciji i vazodilataciji krvnih sudova tokom migrenoznog napada, i njegova upotreba je najdelotvornija ukoliko se primeni što pre, pri pojavi prvih simptoma'
					},
					{
						id: 6,
						name: 'List pitome nane',
						desc: 'Čaj',
						image: 'nana.png',
						effects:
							'Pomaže ublažavanju grčeva i olakšava varenje tako da se njegova upotreba preporučuje u slučajevima kada je okidač pojave napada problem u varenju određenih namirnica.'
					},
					{
						id: 7,
						name: 'List Artičoke',
						desc: 'Čaj',
						image: 'articoka.png',
						effects:
							'Povoljno deluju na funkcije jetre i lučenje žuči, olakšanje varenja i regulisanje stolice, što može pomoći prevazilaženju opstipacije kao uzroka pojave migrene'
					}
				]
			},
			sinusi: {
				id: 'sinusi',
				name: 'Sinusi',
				desc: 'Gornji disajni putevi',
				image: 'sinusache.png',
				products: [
					{
						id: 8,
						name: 'Žalfija',
						desc: 'Etarsko ulje',
						image: 'zalfija.png',
						purpose:
							'Doprinosi umirenju iritacija usne duplje, grla i glasnih žica.',
						effects:
							'Otklanja glavobolju i olakšava disanje kod infekcija disajnih puteva.'
					},
					{
						id: 9,
						name: 'Pitoma nana',
						desc: 'Etarsko ulje',
						image: 'nana.png',
						purpose: 'Doprinosi normalnoj digestiji i imunitetu.',
						effects:
							'Pored toga, pozitivno utiče i na ublažavanje simptoma infekcija gornjih disajnih puteva, kao što su kašalj ili bolno grlo.'
					},
					{
						id: 10,
						name: 'Ekosept',
						desc: 'Fitopreparat',
						image: 'ekosept.png',
						purpose:
							'Koji sadrži etarsko ulje žalfije I pitomene nane.Koristi se u toku infekcija gornjih disajnih puteva,u toku infekcije sluzokože usne duplje I desni, kod iritacija izazvanih nošenjem ortodonskog aparata ili proteze i proteze I kod pušača za regulisanje bakterijske flore I osvežavanja daha.'
					},
					{
						id: 11,
						name: 'Propolis C-100',
						desc: 'Tablete',
						image: 'propolis.png',
						purpose:
							'Jedinstven proizvod, jer u sebi sadrže čak 35mg ekstrakta propolisa. Koristi se u toku infekcija gornjih disajnih puteva, izazvanih virusima ili gram pozitivnim bakterijama kao što su upala ždrela, krajnika ili glasnih žica, u toku infekcija usne duplje izazvanih virusom herpes I kod bola u grlu.'
					},
					{
						id: 12,
						name: 'Altiprim P',
						desc: 'Sirup',
						image: 'altiprim.png',
						purpose:
							'Sadrži sirup korena belog sleza, ekstrakt korena jagorčevine, tinkturu nadzemnog dela timijana i med – sastojke prirodnog porekla koji mogu imati pozitivan uticaj na zdravlje disajnih organa. Sirup se preporučuje kao sredstvo koje može pružiti olakšanje kod blagih tegoba disajnih puteva praćenih gustim bronhijalnim sekretom i kašljem.',
						effects:
							'Ovi sastojci blagotvorno deluju na sluzokožu disajnih organa i štite je od nadražaja, razređuju gusti bronhijalni sekret, pospešuju izlučivanje sluzi iz bronhija i olakšavaju disanje i iskašljavanje.'
					},
					{
						id: 13,
						name: 'PROPOHERB N',
						desc: 'Sprej',
						image: 'propoherbn.png',
						purpose:
							'Sprej za nos na bazi propolisa i lekovitog bilja pomaže kod infekcija i upala nosne duplje i sinusa.',
						effects:
							'Poboljšava prohodnost disajnih puteva i olakšanje simptome zapušenog nosa.Aktivni sastojci propolisa i lekovitog bilja deluju protivupalno i antiseptično na bakterije izazivače infekcija, prisutni tanini deluju adstingentno, čime povoljno deluju na ublažavanje bola i smanjenje otoka sluzokože nosa i sinusa, dok jedinjenja prisutna u etarskom ulju eukaliptusa poboljšavaju prohodnost disajnih puteva.',
						limits: 'Ne preporučuje se deci mlađoj od 6 godina.'
					},
					{
						id: 14,
						name: 'Bronhocea',
						desc: 'Prašak za oralni rastvor',
						image: 'bronhocea.png',
						purpose:
							'Pomaže u ublažavanju simptoma gripa i prehlade kao što su: kašalj, problemi sa disanjem, bol u grlu , povišena temperatura Zahvaljujući pažljivo odabranim sastojcima.',
						effects:
							'Obezbeđuje normalno funkcionisanje gornjeg respiratornog sistema- smanjuje iritaciju grla i usne duplje- pomaže u održavanju normalne telesne temperature tela- održava normalno stanje pluća i bronhija- jača odbrambenu snagu organizma.'
					},
					{
						id: 15,
						name: 'Bronholah',
						desc: 'Gel',
						image: 'bronholah.png',
						purpose:
							'Predstavlja kombinaciju pažljivo odabranih etarskih ulja, koja putem inhalacije pomaže u smirivanju simptoma alergijskog rinitisa.',
						effects:
							'Zahvaljujući svojim sledećim svojstvima: Etarsko ulje limuna , Etarsko ulje lavande, Etarsko ulje nane, Etarsko ulje eukaliptusa. Gel se u tankom sloju nanosi ispod nosa, na kožu slepoočnica i iza uha ili se rastrlja među dlanovima i udiše.'
					},
					{
						id: 16,
						name: 'Echianid',
						desc: 'Sprej za grlo',
						image: 'echianid.png',
						purpose:
							'Dodatak ishrani (dijetetski suplement) na bazi ekstrakta ehinacee purpuree sa prirodnom aromom mente.',
						effects:
							'Aplikuje se nerazblažen direktno na sluzokožu jezika i grla. Olakšava simptome kod prehlade i upale grla.Ne sadrži gluten, šećer, supstance životinjskog porekla i derivate mleka.',
						limits:
							'Ne sadrži alkohol. Pogodan za odrasle i decu stariju od 12 godina'
					},
					{
						id: 17,
						name: 'PropoMucil PHYSIO',
						desc: 'Fiziološki rastvor',
						image: 'propomucil.png',
						purpose:
							'Rastvor sadrži propolis, N-acetilcistein, etarska ulja eukaliptusa i nane.',
						effects:
							'Poboljšava prohodnost nosa i ublažava tegobe gornjih disajnih puteva. Potrebno je naprskati u nosnu šupljinu više puta u toku dana, po potrebi.',
						limits:
							'PropoMucil Physio hypertonic se preporučuje odraslima i deci od 3. godine za svakodnevnu upotrebu.'
					},
					{
						id: 18,
						name: 'Pulmint',
						desc: 'Inhalator za nos',
						image: 'pulmint.png',
						purpose:
							'Kod zapušenog nosa (prehlade, kijavice, alerije) za svakodnevnu higijenu nosne šupljine. Pulmint fresh, inhalator za nos, se koristi kod zapušenog nosa i otežanog disanja. Pulmint fresh u svom sastavu sadrži mentol i ulje eukaliptusa.',
						effects:
							'Mentol deluje kao moćan antiseptik, dok se ulje eukaliptusa bori sa bakterijama i virusima na nivou nosne šupljine i sprečava da ovi infektivni agensi prodru dublje u disajne puteve'
					},
					{
						id: 19,
						name: 'Rhinosinn',
						desc: 'Inhalator za nos',
						image: 'rhinosinn.png',
						purpose:
							'Rhinosinn se koristi za ublažavanje zapušenosti nosa i curenja iz nosa, kao i za sprečavanje rinitisa i infekcija respiratornog trakta.',
						effects:
							'Sadrži etarska ulja i tinkture šest različitih biljaka čiji aktivni principi imaju dokazanu efikasnost kroz brojne studije, a njihovo delovanje se ispoljava kroz sledeće efekte koje postižu u sinergiji:  Smanjuju zapušenost nosa  Sprečavaju rast i razvoj patogena. Stimulišu regeneraciju sluzokože nosa.'
					},
					{
						id: 20,
						name: 'Hysan Baby',
						desc: 'Kapi za nos',
						image: 'hysan.png',
						purpose:
							'Hysan baby je sterilan, izotonični rastvor koji ne sadrži konzervans ni potisni gas.',
						effects:
							'Ima dvostruko dejstvo: formira dugotrajan i stabilan zaštitni film na sluzokoži i ima visok kapacitet vezivanja vode.',
						limits: 'Rastvor je sterilan 6 meseci nakon otvaranja.'
					},
					{
						id: 21,
						name: 'Marisol Isotonic 50ml',
						desc: 'Sprej za nos',
						image: 'marisol.png',
						purpose:
							'Namenjen je osobama kod kojih je poremećena normalna fiziološka funkcija nosne sluzokože, kao i održavanju svakodnevne higijene nosnih šupljina.',
						effects:
							'Marisol isotonic rastvor vraća sluzokoži nosa njenu prirodnu vlažnost, sposobnost samoprečišćavanja i normalne produkcije sluzi koja je štiti od isušivanja i mehaničkih nadražaja.'
					},
					{
						id: 22,
						name: 'Nisita®',
						desc: 'Mast za nos',
						image: 'nisita.png',
						purpose:
							'Mast za nos se primenjuje kod suve sluznice nosa, kao dodatno lečenje kod zapušenog nosa, npr. kod obične prehlade, za čiščenje i vlaženje sluznice nosa, npr. suv vazduh u prostoriji, za lečenje krastica u nosu.',
						limits: 'Nisita mast za nos mogu koristiti odrasli, deca i odojčad.'
					},
					{
						id: 23,
						name: 'PROPOHERB G',
						desc: 'Sprej za grlo',
						image: 'propoherb.png',
						purpose:
							'Sprej za grlo na bazi propolisa i lekovitog bilja pomaže kod upala i infekcija usne duplje i ždrela.',
						effects:
							'Ublažava prateće simptome oboljenja desni, kao što je paradentoza. Olakšava bol u grlu i pomaže kod suvog i nadražajnog kašlja.',
						limits:
							'Ne preporučuje se deci mlađoj od 6 godina. Preparat sadrži alkohol. Ne upotrebljavati duže od dve nedelje u kontinuitetu.'
					},
					{
						id: 24,
						name: 'Apis Gola',
						desc: 'Sprej za grlo',
						image: 'apis.png',
						purpose:
							'Sprej za grlo brzo i efikasno smanjuje crvenilo sluzokože grla, bol, grebanje otežano gutanje a ukoliko su prisutne Afte ubrzava njihovo zarastanje.',
						effects:
							'Takodje sprečava rast bakterija i gljivica u usnoj duplji.',
						limits:
							'Pre upotrebe promućkati !Za uzrast od 1-4 godine 3x dnevno.Za uzrast od 4-12 godina 4x dnevno.'
					},
					{
						id: 25,
						name: 'Phytovirin',
						desc: 'Pastile',
						image: 'phytovirin.png',
						purpose:
							'Svojom specifičnom formulacijom oblažu usnu duplju i stvaraju prirodni zaštitni film koji blokira ulazak patogena, virusa i bakterija u organizam.',
						effects:
							'Pastile štite organizam od virusa i bakterija, održavaju zdravlje bronhija i respiratornog trakta, podržavaju prirodnu odbranu organizma, pomažu u ublažavanju bola u grlu, doprinose smanjenju umora.',
						limits:
							'Odrasli: 1 pastila 6 puta dnevno, polako rastopiti u ustima. Deca starija od 12 godina : 1 pastila 2 puta dnevno, polako rastopiti u ustima.'
					},
					{
						id: 26,
						name: 'beli slez',
						desc: 'čaj',
						image: 'slez.png',
						purpose:
							'Koristi se kao sredstvo za ublažavanje nadražaja na kašalj, za ispiranja kod zapaljenja sluznica gornjih delova organa za disanje, kod katara želudca i creva, a spolja kao oblog kod zapaljenja i opekotina na koži.'
					},
					{
						id: 27,
						name: 'Žalfija i bokvica',
						desc: 'pastile',
						image: 'herbalsept.png',
						purpose:
							'Ublažavaju tegobe koje prate upalu sluznice usta i grla.Kod nadražaja gornjih disajnih puteva.',
						effects:
							'Ubrzavaju regeneraciju oštećene ili obolele sluzokože. Sperečavaju nastanak superinfekcija (kod afti, gingivostomatitisa).'
					},
					{
						id: 28,
						name: 'Herboral',
						desc: 'sirup',
						image: 'herboral.png',
						purpose:
							'Kod kašlja praćenog prehladom i gripom,kod upale grla i hroničnog bronhitisa,u tretmanu prehlade i gripa. ',
						effects:
							'Kod održavanja pravilne funkcije respiratornog traktaza, lakše iskašljavanje sekretakod iritacije grla praćene produktivnim kašljem',
						limits:
							'Odrasli i deca starija od 12 godina: 3 puta dnevno 15ml.Deca od 4 do 12 godina: 3 puta dnevno 5ml.Napomena: sirup se uzima posle jela.'
					},
					{
						id: 29,
						name: 'Mucoplant',
						desc: 'sirup',
						image: 'mucoplant.png',
						purpose:
							'Dr. Theiss-ov Mucoplant Good night sirup za laku noć sadrži mešavinu ekstrakta biljaka, pa pored uskolisne bokvice sadrži kamilicu, matičnjak i majčinu dušicu, biljke koje se tradicionalno koriste za ublažavanje nelagode u disajnim putevima.',
						effects:
							'Posebno se preporučuje osobama sa osetljivim disajnim putevima, kod kašlja praćenog obimnim stavarnjem sekreta jer može doprineti pravilnom funkcionisanju i umanjenju nadražaja na kašalj, bez ometanja prirodnog eliminisanja sekreta, što doprinosi kvalitetnom odmoru tokom noći.'
					},
					{
						id: 30,
						name: 'Bronhoklir',
						desc: 'sirup',
						image: 'bronhoklir.png',
						purpose:
							'Sirup bršljan sadrži ekstrat lista bršljana koji razređuje sluz koja se nakuplja u disajnim putevima smanjuje neprijatne nadražaje grla i pomaže opuštanju glatkih mišićnih struktura u disajnim putevima i takoolakšava proces iskašljavanja.',
						limits:
							'Predstavlja pomoć kod suvog i produktivnog kašlja. Ne sadrži šećer i mogu ga koristiti i dijabetičari'
					},
					{
						id: 31,
						name: 'Beba C',
						desc: 'sirup',
						image: 'bebac.png',
						purpose:
							'Beli slez sa vitaminom C je dijetetski proizvod namenjen za održavanje zdravlja respiratornih organa.',
						effects:
							'Beli slez ima umirujuće i prijatno dejstvo na grlo, ždrelo i glasne žice. Pruža olakšanje u slučaju nadražaja/iritacije grla, ždrela i glasnih žica.Tradicionalno, beli slez se koristi u tretmanu suvog i nadražajnog kašlja.'
					}
				]
			},
			zubi: {
				id: 'zubi',
				name: 'Zubobolja',
				desc: 'Preparati i lečenje',
				image: 'toothache.png',
				products: [
					{
						id: 32,
						name: 'Aloe Fresh',
						desc: 'Sprej za osvežavanje daha',
						image: 'aloefresh.png',
						purpose:
							'Sprečava razvoj bakterija u usnoj duplji zahvaljujući jedinstvenom sastavu.',
						effects:
							'Sadrži aloju, eterično ulje ulja čajevca, ekstrakt semena grejpfrutai kitosan deluje antiseptik i ima antiinflamatorno dejstvo i može preporučiti i za ublažavanje tegoba kod pojave čireva u ustima, upale desni i bolova u grlu.'
					},
					{
						id: 33,
						name: 'Dologel',
						desc: 'Gel za desni',
						image: 'dologel.png',
						purpose:
							'Njegov sastav čini isključivo kombinacija prirodnih sastojaka: dok valerijana ublažava bol, sadržaj kamilice i propolisa smiruje upalu i dezinfikuje desni.Dologel, za razliku od sličnih proizvoda, ne sadrži lidokain niti bilo koji drugi sintetički anestetik kako ne bi opteretio maleni dečiji organizam.',
						effects:
							'Zahvaljujući prirodnim sastojcima, nežan je za stomak i može se koristiti u neograničenim količinama.'
					},
					{
						id: 34,
						name: 'Mediflora',
						desc: 'biljne kapi',
						image: 'mediflora.png',
						purpose:
							'Preporučuju se za prevenciju i pomoćnu terapiju kod bolesti desni (gingivitis, paradontopatija).',
						effects:
							'Tinktura se upotrebljava spolja - za masažu desni.Preparat sadrži alkohol (etanol).',
						limits:
							'Način čuvanja: Na sobnoj temperaturi i tamnom mestu, izvan domašaja dece.'
					},
					{
						id: 35,
						name: 'Herbalsept',
						desc: 'Gel',
						image: 'herbalsept.png',
						purpose:
							'Gel sa hijaluronskom kiselinom protiv zubobolje i za negu desni sadrži ekstrakt kamilice, etarska ulja nane i karanfilića, i hijaluronsku kiselinu.',
						effects:
							'Gel je formulisan tako da na veoma brz i efikasan način ukloni zubobolju, bez obzira na uzrok njene pojave (zubobolja kao posledica karijesa ili oboljenja desni, zubobolja nastala usled izbijanja ili povrede zuba, bol u zubima kao reakcija na različite termičke, hemijske i mehaničke nadražaje).'
					},
					{
						id: 36,
						name: 'Tinctura Paradentoica',
						desc: 'Kapi za jačanje desni ',
						image: 'tinctura.png',
						purpose:
							'Kapi za jačanje desni predstavljaju kombinaciju tinktura u čijem sastavu dominiraju tanini, flavonoidi i etarska ulja. Preparat se preporučuje za prevenciju i pomoćnu terapiju kod bolesti desni (gingivitis, paradontopatija).',
						effects:
							'Zahvaljujući svom kompleksnom sastavu preparat ispoljava adstrigentno, antiseptično, antiinflamatorno, blago anestetično i hemostatično dejstvo.'
					},
					{
						id: 37,
						name: 'Gingival',
						desc: 'Gel za masažu desni',
						image: 'gingival.png',
						purpose:
							'Kao pomoćno sredstvo za održavanje i podržavanje rezultata koje je postigao stomatolog, sprovodeći standarnu terapiju kod pacijenata sa izraženim znacima zapaljenja desni, nastalih zbog gingivitisa, paradontopatije, naslaga kamenca i drugih uzročnika.',
						effects:
							'Pre svakog nanošenja Gingival gela, zube treba dobro oprati četkicom i pastom za zube. Istisnuti oko 0,5 cm gela na jagodicu prsta i blagim kružnim pokretima nanositi na i okolo desni sa spoljašnje strane, lagano ih masirati; isto ponoviti sa unutrašnje strane desni.Nakon nanošenja gela jedan sat ne uzimati hranu ni tečnost kako bi gel ostvario dejstvo.',
						limits:
							'GINGIVAL gel se koristi dva do tri puta dnevno, najkraće 7 dana.'
					},
					{
						id: 38,
						name: 'Dentinol',
						desc: 'Kapi',
						image: 'dentinol.png',
						purpose:
							'Služe prvenstveno za kratkotrajno i privremeno smirivanje upale i bolova zuba, desni i sluzokože usne duplje, a ne za njihovo lečenje.',
						effects:
							'Poseduju antiseptičko, baktericidno, adstrigentno, anestetičko i antiflogističko dejstvo.'
					},
					{
						id: 39,
						name: 'Ozosept',
						desc: 'koncentrovani rastvor',
						image: 'ozosept.png',
						purpose:
							'Redovnu higijenu usne duplje i održavanje zdravlja desni,ublažavanje tegoba kod oboljenja desni, grla i ždrela,tretman zapaljenja desni (gingivitis, parodontopatija), usne duplje (stomatitis, afte), krajnika (tonzilitis), grla (faringitis) neutralizaciju neprijatnog zadaha,osobe koje nose protetičke nadoknade i posle stomatoloških intervencija.',
						effects:
							'Razblaženim rastvorom ispirati usnu duplju ili grlo tri puta dnevno.'
					}
				]
			},
			oči: {
				id: 'oči',
				name: 'Oči',
				desc: 'Preparati i lečenje očiju',
				image: 'eyes.png',
				products: [
					{
						id: 40,
						name: 'Proculin Plus',
						desc: 'Kapsule',
						image: 'proculin-plus.png',
						purpose:
							'sadrže kompleks sastojaka neophodnih za očuvanje vida i zaštitu očiju od štetnog dejstva takozvanih slobodnih radikala. Ksantofilni pigmenti lutein i zeaksantin igraju važnu ulogu u održanju funkcije retine.',
						effects:
							'Visoko koncentrovano i prečišćeno riblje ulje (obogaćeno optimalnom koncentracijom DHA) doprinosi održavanju normalnog vida. Vitamini i minerali doprinose zaštiti očiju od štetnog dejstva slobodnix radikala i pomažu očuvanju vida.'
					},
					{
						id: 41,
						name: 'Vitrex',
						desc: 'Dodatak ishrani',
						purpose:
							'Namenjen za potrebe ishrane kod degeneracije staklastog tela. Vitrex poboljšava metabolizam staklastog tela i vraća ga u fiziološko stanje - postepeno se povlače leteće mušice.'
					},
					{
						id: 42,
						name: 'AretIN',
						desc: 'Kapsule',
						image: 'aretin.png',
						purpose:
							'Proizvod koji je namenjen očuvanju i unapređenu zdravlja oka, pre svega kod pacijenata obolelih od dijabetesa.',
						effects:
							'Može se primenjivati i kod drugih stanja koje pogađaju oko u čijem razvoju učestvuju okidativni stres ili upalni procesi.'
					},
					{
						id: 43,
						name: 'Vitamix 50',
						desc: 'Kapsule',
						image: 'vitamix.png',
						purpose:
							'Jedinstveno formulisani preparat za održavanje zdravlja očiju i dobar vid.',
						effects:
							'Predstavlja kombinaciju visokog sadržaja ključnih antioksidanasa luteina, zeaksantina i astaksantina koji su od značaja za očuvanje normalne funkcije oka i za kvalitet očnog pigmenta. Njihovo dejstvo pojačano je dodatkom vitamina E i beta karotena.'
					},
					{
						id: 44,
						name: 'OptiNerve ',
						desc: 'Kapsule',
						image: 'optinerve.png',
						purpose:
							'Dijetetski suplement sa neuroprotektivnim dejstvom namenjen osobama koje boluju od glaukoma.',
						effects:
							'Ovaj preparat dizajniran je tako da pruži metaboličku potporu nervnom tkivu, zaštiti optički živac i spreči dalju progresiju bolesti. OptiNerve kao aktivnu supstancu sadrži epigalokatehin-3-galat (EGCG), potentno polifenolno jedinjenje dobijeno iz lista zelenog čaja.'
					}
				]
			}
		}
	},
	ruka: {
		id: 'ruka',
		name: 'Ruka',
		desc: 'Ruka',
		image: 'hand.png',
		parts: {
			zglob: {
				id: 'zglob',
				name: 'Ručni Zglob',
				desc: 'Lečenje i olakšanje',
				image: 'wrist.png',
				products: [
					{
						id: 45,
						name: 'Arthronal',
						desc: 'Kapsule',
						image: 'arthronal.png',
						purpose:
							'Arthronal je izbalansirana kombinacija 11 aktivnih sastojaka za regeneraciju hrskavice i bolju pokretljivost zglobova.Povoljno utiče na bol i ograničenu pokretljivost kod pacijenata sa osteartrozom kolena, kuka, malih zglobova šake ručja, odnosno kod osteoartroze na nivou kičmenog stub. Pomaže u oporavku nakon povreda ligamenata i ostalih glavnih ili sporednih elemenata zglobova.',
						effects:
							'Potpomaže normalno stvaranja kolagena, vezivnog tkiva i normalnu koštanu funkciju.Poboljšava fukcionalni kapacitet zglobova.Potpomaže zdrav inflamatorni odgovor.'
					},
					{
						id: 46,
						name: 'Cartinorm',
						desc: 'Prašak za oralni rastvor',
						image: 'cartinorm.png',
						purpose:
							'Dodatak ishrani sa zaslađivačima sa ukusom pomorandže, limuna i ananasa.Cartinorm +  BIOcollagen se preporučuje kod: očuvanja zdrave hraskavice i ublažavanje simptoma već nastale artroze (zahvaljujući visokim dozama glukozamin-sulfatai hondroitin-sulfata), za regeneraciju hrskavice uz pomoć Fortigel bioaktivnog peptida kolagena kod osteoartritisa, kod sportista za održavanje zdravlja zglobova i povećanje fizičkih performansi.',
						effects:
							'Glukozamin je gradivna komponenta hrskavice. Ima povoljne efekte na očuvanje i održavanje optimalne funkcije hrskavice i zglobova i to normalizujući funkciju hondrocita (ćelija hrskavice).Hondroitin-sulfat je glavna komponenta hrskavice, konstruktivni sastojak proteoglikana koji obezbeđuje mehanička i elastična svojstva hrskavice. Deficit hondroitin-sulfata u hrskavici je povezan sa pojavom osteoartritisa.'
					},
					{
						id: 47,
						name: 'Flexaktiv 9',
						desc: 'Tablete',
						image: 'flexaktiv9.png',
						purpose:
							'Flexaktiv je dijetetski suplement namenjen za zglobove i kosti.Flexaktiv 9 tablete namenjene su za preventivnu zaštitu zglobova, kod intenzivnih fizičkih aktivnosti,kod upalnih procesa vezivnog tkiva, kao dopunska terapija kod degenerativnih i zapaljenskih promena na zglobovima (osteoarthritis, reumatoidni artritis, juvenilni artritis, giht).Preporučuju se starijim ljudima, sportistima i rekreativcima.',
						effects:
							'Glukozamin je osnovni gradivni materijal zglobnih struktura. Indijski tamjan doprinosi održavanju normalne pokretljivosti zglobova.Rizoma kurkume smanjuje otečenost zglobova, ima protivupalno dejstvo.Rizoma đumbira smanjuje bol kod osoba sa osteoartritisom.Vitamin C doprinosi normalnom stvaranju kolagena za normalnu funkciju kostiju i hrskavice te doprinosi zaštiti ćelija od oksidativnog stresa.Mangan doprinosi normalnom stvaranju vezivnog tkiva, doprinosi zaštiti ćelija od oksidativnog stresa te doprinosi održavanju normalnih kostiju.Selen doprinosi zaštiti ćelija od oksidativnog stresa.'
					},
					{
						id: 48,
						name: 'No-Dol max',
						desc: 'Tablete',
						image: 'nodol-max.png',
						purpose:
							'Preporučuju se kod hroničnih reumatskih tegoba, kao i kod sportskih povreda.',
						effects:
							'Dijetetski dodatak ishrani sa manganom, glukozaminom, kondroitinom, MSM kompleksom i biljnim ekstraktima aloje i đavolje kandže, koji povoljno utiče na pokretljivost zglobova. Olakšava tegobe izazvane hroničnim upalama zglobova, smanjuje bolove i oticanje, pospešuje pokretljivost zglobova i ubrzava oporavak nakon povreda i preloma.'
					},
					{
						id: 49,
						name: 'K2D3',
						desc: 'Tablete',
						image: 'k2d3.png',
						purpose:
							'Sadrži najoptimalniju kombinaciju dva esencijalna vitamina koji sinergistički deluju na jačanje kostiju. Preporučuje se uz kalcijum osobama koje boluju od osteoporoze',
						effects:
							'Poboljšava apsorpciju i upotrebljivost kalcijuma,usmerava kalcijum u kosti,podstiče izgradnju i regeneraciju kostiju,poboljšava mineralizaciju kostiju,povećava gustinu kostiju.K2D3 usmerava kalcijum u kosti umesto u krvne sudove što je istovremeno bitno i za zdravlje kostiju i za kardiovaskularno zdravlje.'
					},
					{
						id: 50,
						name: 'Hyalfit',
						desc: 'Kapsule',
						image: 'hyalfitkapsule.png',
						purpose:
							'Preporučuje se primena Hyalfit kapsula kod: osteoartritisa, degenerativne bolesti zglobova, artritisa kolena, lakta, ramena, kuka, šake i stopala, reumatoiodnog artritisa, povreda zglobova, bolova pri kretanju, u stanju mirovanja i ukočenosti zglobova.',
						effects:
							'Kolagen utiče na ćelije hrskavice i kostiju tako što stimuliše povećanje proizvodnje dodatnog, novog kolagena i sprečava razgradnju već postojeće strukture hrskavice. Time se poboljšava pokretljivost zglobova .Boswellia ublažava proces upala, pozitivno deluje kod ublažavanja simptoma osteoartritisa, pomaže kod bolova u zgobovima, jutarnje ukočenosti i poboljšava pokretljivost zglobova. Hondroitin sulfat je važna strukturna komponeneta hrskavice i pomaže kod otpornosti na pritisak u zglobu. Hijaluronska kiselina ima esencijalnu ulogu u održavanju normalne funkcije zglobova'
					},
					{
						id: 51,
						name: 'Vitalis Sports Cream',
						desc: 'Krem',
						image: 'sportscream.png',
						purpose:
							'Sports cream je biljni antireumatik, efikasan kod reume, artritisa, sportskih povreda, bolova u leđima, ukočenog vrata, tegoba kod poslovnih ljudi. Zaustavlja reumatske i sportske bolove.',
						effects:
							'Trenutno ublažava bol.Eukaliptus, nana, ruzmarin i aloe vera će vratiti mladost Vašim zglobovima.Sports cream ne samo da ublažava bol nego i jača hrskavicu i poboljšava cirkulaciju u samom zglobu.'
					},
					{
						id: 52,
						name: 'Artox Gel',
						desc: 'Gel',
						image: 'artoxgel.png',
						purpose:
							'Zahvaljujući osmotskom dejstvu i njegovim isparljivim komponentama, ovaj proizvod je koristan za oslobađanje od bolova u mišićima ili zglobovima.',
						effects:
							'Aktivni sastojci Artox gela ostvaruju i antizapaljenska, antiedematozna i analgetska svojstva delujući povoljno na smanjenje bola, otoka i upale.'
					},
					{
						id: 53,
						name: 'Hyalfit',
						desc: 'Gel',
						image: 'hyalfitgel.png',
						purpose:
							'Hyalfit gel je preparat namenjen za masažu sa umirujućim dejstvom na mišiće, ligamente i zglobove sa efektom hlađenja.Kreiran je za brzo i dugotrajno olakšanje i uklanjanje bol.',
						effects:
							'Mentol u kombinaciji sa alkoholom prokrvljuje, hladi i pomaže da se bolje apsorbuju aktivne supstance.Preparat sadrži uravnoteženu kombinaciju tri vrste biljaka (indijski tamjan - Boswellia serrata, gavez- Symphytum officinale, divlji kesten- Aesculus hyppocastanum) sa blagotvornim dejstvom na celokupni koštano-mišićni sistem.Hyalfit gel je dodatno obogaćen hijaluronskom kiselinom, koja je sastavni deo sinovijalne tečnosti zglobova.'
					},
					{
						id: 54,
						name: 'Cetilar',
						desc: 'Krem',
						image: 'cetilar.png',
						purpose:
							'Cetilar krem je nova formula brzog dejstva za lokalnu upotrebu kod traumatičnih i artritičnih bolova u zglobovima, mišićima i tetivama.',

						effects:
							'Poboljšava funkciju zglobova, povećava obim pokreta i ublažava bol.Zbog svojih odličnih svojstava hlađenja i podmazivanja, proizvod je pogodan za sportsku i terapijsku masažu, a koristi se i kao pomoć kod bolova u zglobovima, tetivama i mišićno-skeletnom sistemu.'
					},
					{
						id: 55,
						name: 'NEM',
						desc: 'Kapsule',
						image: 'nem.png',
						purpose:
							'Sadrže membranu ljuske jajeta u prahu koja je prirodan izvor proteina, prirodnog glukozamina, prirodnog hondroitin sulfata, prirodne hijaluronske kiseline i prirodnog kolagena tipa I.',
						effects:
							'Membrana ljuske jajeta sadrži identične komponente kao i ljudski zglobovi, tako da predstavlja koristan izvor hranljivih supstanci neophodnih za stalno obnavljanje hrskavice i vezivnog tkiva, održavanje punog kvaliteta zdravlja zglobne hrskavice i okolnih struktura.'
					},
					{
						id: 56,
						name: 'Biofreeze',
						desc: 'Gel',
						image: 'biofreeze.png',
						purpose:
							'Biljni ekstrakti Biofreeze gela predstavljaju analgetičku komponentu koja blagotvorno deluje na povređeno i oštećeno tkivo, u smislu lokalnog analgetičkog efekta. Bol uklanja brzo i efikasno. Prodire duboko i obezbeđuje produženo dejstvo.',
						effects:
							'Brzo i efikasno uklanja sve vrste bolova i grčeva uz prijatan osećaj hlađenja, podstiče cirkulaciju i olakšava tegobe nastale kao posledica proširenih vena: bol ,otok, napetost, trnjenje, grčeve, pucanje kapilara, osećaj “teških nogu”, pomaže kod sportskih povreda, istegnuća i uganuća, otklanja glavobolju, smanjuje bolove u vratu i leđima. Zbog svoje teksture analgetskog dejstva i osvežavajućeg mirisa mentola pogodan je za masažu.'
					}
				]
			}
		}
	},
	torzo: {
		id: 'torzo',
		name: 'Torzo',
		desc: 'Kontrola i lečenje',
		image: 'torso.png',
		parts: {
			varenje: {
				id: 'varenje',
				name: 'Sistem za Varenje',
				desc: 'Pomoć i kontrola',
				image: 'coction.png',
				products: [
					{
						id: 57,
						name: 'Antimetil',
						desc: 'Tablete',
						image: 'antimetil.png',
						purpose:
							'Može se koristiti u slučaju prekomernog unosa hrane, narušavanja uobičajenih navika ishrane (npr. na odmoru), kod jutarnjih mučnina u trudnoći, putne mučnine...',
						effects:
							'Antimetil sadrži ekstrakt rizoma đumbira, koji olakšava varenje.'
					},
					{
						id: 58,
						name: 'Phyto Digestion',
						desc: 'Biofar',
						image: 'phyto-digestion.png',
						purpose: 'Olakšava varenje hrane i ubrzava metabolizam.',
						effects: 'Sadrži biljne enzime iz artičoke, ananasa i papaje. '
					},
					{
						id: 59,
						name: 'Digestal',
						desc: 'Tablete',
						image: 'digestal.png',
						purpose:
							'Otklanja tegobe izazvane otežanim varenjem masne hrane kod smanjene sekrecije digestivnih enzima.',
						effects: 'Dodatni izvor enzima pankreasa. '
					},
					{
						id: 60,
						name: 'Enzynorm',
						desc: 'Tablete',
						image: 'enzynorm.png',
						purpose:
							'Gastrorezistentna kapsula koja se razlaže direktno u crevima. Ne sadrži sastojke životinjskog porekla.',
						effects:
							'Sadrži pet enzima za varenje - alfa-amilaza, proteaza, celulaza, lipaza, laktaza. '
					},
					{
						id: 61,
						name: 'Tinctura Carminativa',
						desc: 'Tečnost',
						image: 'gasovi-u-stomaku.png',
						purpose:
							'Preparat pomaže kod stomačnih tegoba tako što stimuliše creva na sekreciju i resorpciju i time poboljšava probavu.',
						effects:
							'Takođe, deluje blago antiseptično i sprečava abnormalno vrenje i razvijanje gasova. Preparat se ne sme primenjivati kod enteritisa. Piti tri puta dnevno po 30 kapi u malo vode posle jela.',
						limits: 'Preparat sadrži alkohol (etanol)!'
					},
					{
						id: 62,
						name: 'Čaj od cveta kamilice',
						desc: 'Čaj',
						image: 'cvet-kamilice.png',
						purpose:
							'Koristi se za olakšanje varenja, kod proliva, kod hemoroida. Supenu kašiku cveta kamilice preliti šoljom (200ml) ključale vode. Sud poklopiti i ostaviti da stoji 5-10 minuta, procediti. Piti 3-4 puta dnevno po šolju čaja.',
						effects: 'Antiseptik.'
					},
					{
						id: 63,
						name: 'Čaj od cveta lipe',
						desc: 'Čaj',
						image: 'cvet-lipe.png',
						purpose:
							'Supenu kašiku lipovog cveta preliti šoljom (200ml) ključale vode. Sud poklopiti i ostaviti da stoji 10 minuta zatim čaj procediti i zasladiti po želji. Piti 2-3 šolje čaja dnevno',
						effects: 'Olakšanje varenja'
					},
					{
						id: 64,
						name: 'Čaj od korena angelike',
						desc: 'Čaj',
						image: 'koren-angelike.png',
						purpose: 'Koristi se za  eliminisanje gasova I kod slabog varenja.',
						effects:
							'Kafenu kašiku usitnjenog korena angelike preliti  sa 200 ml hladne vode, kratko prokuvati i procediti, ili koren preliti ključalom vodom i posle 5-10 minuta procediti. Piti nekoliko puta dnevno jednu šolju nezaslađenog čaja pola sata ili  sat vremena pre jela.',
						limits: 'Može izazvati fotosenzitivnu alergijsku reakciju.'
					},
					{
						id: 65,
						name: 'Čaj od korena i nadzemnog dela maslačka',
						desc: 'Čaj',
						image: 'koren-maslacka.png',
						purpose: 'Olakšava pražnjenje creva , poremećaja varenja.',
						effects:
							'Kafenu kašičicu usitnjenog korena maslačka preliti sa 200 ml hladne vode, zagrejati i pustiti da ključa 5 minuta i ostaviti da stoji 10 minuta a zatim čaj procediti. Piti tri puta dnevno po šolju čaja pre jela.'
					},
					{
						id: 66,
						name: 'Čaj od korena vodopije',
						desc: 'Čaj',
						image: 'koren-vodopije.png',
						purpose:
							'Kao gorko sredstvo koristi se za poboljšanje apetita, za boljevarenje i za jačanje želuca.',
						effects:
							'Jednu kašičicu usitnjenog korena vodopije preliti sa oko 200 ml ključale vode i posle 5-10 minuta procediti. Piti dva do tri puta dnevno po šolju čaja pre jela. Kafenu kašiku herbe vodopije preliti sa 200ml ključale vode. Sud poklopiti i ostaviti da stoji 15 minuta. Procediti i piti 2-3 puta dnevno po šolju čaja pola sata pre jela.',
						limits:
							'Savetuje se oprez kod pacijenata sa kamenom u žuči. Ne sme se koristiti kod alergije na cikoriju ili druge biljke koje pripadaju familiji Asteraceae.'
					},
					{
						id: 67,
						name: 'Kapi korena maslačka',
						desc: 'Tinctura Taraxaci',
						image: 'biljne-kapi-maslacka.png',
						purpose:
							'Aktivni sastojci korena maslačka, usled gorkog ukusa povoljno deluju na podsticanje apetita i regulisanje varenja i olakšavaju pražnjenje creva.',
						effects: 'Kod osetljivih osoba može izazvati alergijske reakcije.',
						limits:
							'Usled prisustva alkohola upotreba tinkture se ne preporučuje trudnicama, dojiljama i deci mlađoj od 12 godina.'
					},
					{
						id: 68,
						name: 'Kapi lincure',
						desc: 'Tinctura Gentianae',
						image: 'kapi-lincure.png',
						effects:
							'Aktivni sastojci lincure svojom gorčinom podstiču apetit, povoljno deluju na metabolizam masti pa se upotreba kod dispepsije sa anoreksijom.',
						limits:
							'Preparat sadrži alkohol pa se upotreba tinkture ne preporučuje trudnicama, dojiljama i deci mlađoj od 12 godina. Upotreba se ne preporučuje ni osobama koje boluju od čira u želucu ili dvanaestopalačnom crevu, kao ni osobama koje pate od povišenog krvnog pritiska.'
					},
					{
						id: 69,
						name: 'Kapi nane',
						desc: 'Tinctura Menthae piperitae',
						image: 'kapi-nane.png',
						purpose:
							'Aktivni sastojci lista nane deluju spazmolitično i analgetično, a gorke supstance povoljno deluju na lučenje sokova za varenje pa se upotreba preporučuje za olakšanje , kao i za eliminisanje gasova i ublažavanje bolova i grčeva. Tradicionalno, kapi nane se preporučuju i kao blago sredstvo za umirenje.',
						limits:
							'Preparat sadrži alkohol pa se upotreba tinkture ne preporučuje trudnicama, dojiljama i deci mlađoj od 12 godina.'
					},
					{
						id: 70,
						name: 'Kapi od artičoke',
						desc: 'Cynarae tinctura',
						image: 'kapi-articoke.png',
						purpose:
							'Pružaju podršku funkciji digestivnog trakta, regulišu protok digestivnih sokova',
						effects:
							'Pomažu u varenju hrane i ublažavanju dispeptičkih tegoba sa osećajem punoće i nadutosti.',
						limits:
							'Ne preporučuje se upotreba proizvoda kod osoba koje su osetljive na neki od njegovih sastojaka ili na sastojke biljaka iz familije Asteraceae.Proizvod nije namenjen trudnicama, dojiljama i deci malđoj od 12 godina.Ne preporučuje se upotreba proizvoda osobama koje boluju od opstrukcije žučnih puteva , holangitisa, kamena u žuči ili hepatitisa.'
					},
					{
						id: 71,
						name: 'Kapi protiv grčeva u stomaku',
						desc: 'Tinctura Antispasmodica',
						purpose:
							'Aktivni sastojci lekovitog bilja koje ulazi u sastav ove tinkture pa se preporučuje kod tegoba sa varenjem, grčeva i crevnih kolika.',
						effects:
							'Deluju protivupalno i spazmolitično, olakšavaju varenje, lučenje žuči i eliminisanje gasova.',
						limits:
							'Kod osoba alergičnih na biljke iz porodice Asteraceae moguće su alergijske reakcije. Preparat sadrži alkohol pa se upotreba tinkture ne preporučuje trudnicama, dojiljama i deci mlađoj od 12 godina.'
					},
					{
						id: 72,
						name: 'Kapi za apetit',
						desc: 'Tinctura Digestiva',
						image: 'kapi-za-apetit.png',
						purpose:
							'U sastav preparata ulazi lekovito bilje sa gorkim aktivnim sastojcima koji draže čulo ukusa i refleksnim putem preko sluznice jezika izazivaju pojačano lučenje pljuvačke i želudačnog soka.',
						effects:
							'Piti tri puta dnevno po 30 kapi u malo vode pre jela. Preparat podstiče apetit i olakšava varenje hrane.',
						limits: 'Preparat sadrži alkohol (etanol)!'
					},
					{
						id: 73,
						name: 'Čaj od nadzemnog dela hajdučke trave',
						desc: 'Čaj',
						image: 'hajducka-trava.png',
						purpose:
							'Kao sredstvo za olakšavanje tegoba organa za varenje, za poboljšanje apetita, eliminisanje gasova, regulisanje lučenja žuči, kod bolova i grčeva u stomaku, kod amenoreje',
						effects:
							'Jednu kafenu kašičicu herbe hajdučke trave preliti šoljom (200ml) klučale vode, ostaviti da stoji 10 minuta, procediti. Piti 3 puta dnevno po jednu šolju čaja pre obroka.',
						limits:
							'Kao i ostale biljke iz porodice Asteraceae, može da izazove alergijske reakcije.'
					}
				]
			},
			želudac: {
				id: 'zeludac',
				name: 'Želudac',
				desc: 'Olakšanje i lečenje',
				image: 'stomach.png',
				products: [
					{
						id: 74,
						name: 'BioGast',
						desc: 'Biljna Tinktura',
						image: 'bio-gast.png',
						purpose:
							'Koristi se kao dodatak ishrani kod tegoba kao što su gastritis i gorušica, jaka želudačna kiselina i prisustvo helikobaktera.'
					},
					{
						id: 75,
						name: 'BioGastritis',
						desc: 'Biljne Kapi',
						image: 'biogastritis.png',
						purpose:
							'Pomažu kod viška želudačne kiseline,hroničnog gastritisa, helicobacter pylori, čir na želucu i dvanestopalačnom crevu, neprijatnog zadaha prouzrokovanog zapaljenjem želudačne sluznice'
					},
					{
						id: 76,
						name: 'Čaj od cveta crnog sleza',
						desc: 'Čaj',
						image: 'caj-crnislez.png',
						purpose:
							'Lekoviti sastojci crnog sleza koriste kod upale želudačne sluznice i kod blažih proliva.',
						effects:
							'Jednu kafenu kašičicu cveta crnog sleza preliti sa 250ml hladne vode i ostaviti da stoji 5-10 sati (najkraće 2 sata), zagrejati do ključanja, skloniti sa vatre, ostaviti 5 minuta poklopljeno, procediti i piti.'
					},
					{
						id: 77,
						name: 'Čaj od cveta nevena',
						desc: 'Čaj',
						image: 'cvet-nevena.png',
						purpose:
							'Aktivni sastojci nevena deluju protivupalno, antiseptično.',
						effects:
							'Unutrašnja upotreba: Jednu do dve kafene kašike cveta nevena preliti šoljom (200ml) ključale vode. Sud poklopiti, ostaviti da stoji 10-15 min a zatim čaj procediti. Piti tri puta dnevno po šolju nezaslađenog čaja. Spoljašnja upotreba: Dve kašike cveta nevena preliti sa pola litra ključale vode. Sud poklopiti, ostaviti da stoji 10-15 min a zatim čaj procediti.'
					},
					{
						id: 78,
						name: 'Čaj od korena vodopije',
						desc: 'Čaj',
						image: 'koren-vodopije.png',
						purpose:
							'Kao gorko sredstvo koristi se za poboljšanje apetita, za bolje varenje i za jačanje želuca.',
						effects:
							'Jednu kašičicu usitnjenog korena vodopije preliti sa oko 200 ml ključale vode i posle 5-10 minuta procediti. Piti dva do tri puta dnevno po šolju čaja pre jela. Kafenu kašiku herbe vodopije preliti sa 200ml ključale vode. Sud poklopiti i ostaviti da stoji 15 minuta. Procediti i piti 2-3 puta dnevno po šolju čaja pola sata pre jela. ',
						limits:
							'Savetuje se oprez kod pacijenata sa kamenom u žuči. Ne sme se koristiti kod alergije na cikoriju ili druge biljke koje pripadaju familiji Asteraceae.'
					},
					{
						id: 79,
						name: 'Čaj od lanenog brašna',
						desc: 'Čaj',
						image: 'laneno-brasno.png',
						purpose:
							'Kao blagi laksativ usled prisutnih sluzi i celuloze u semenu, kod funkcionalnih poremećaja rada debelog creva. Kod upale želudačne sluznice i spolja',
						effects:
							'Dva do 3 puta dnevno pojesti 1 kafenu kašiku celog ili izmrvljenog semena uz 200ml vode tokom jela. Kod gastritisa, 1-2 kafene kašike semena ostaviti da stoji u hladnoj vodi 20-30 min pa profiltrirati i piti.',
						limits: 'Ne sme se koristiti kod vezanih creva.'
					},
					{
						id: 80,
						name: 'Ulje od kantariona za unutrašnju upotrebu',
						desc: 'HYPERICI OLEUM PRO USUI INTERNA',
						image: 'ulje-kantarion.png',
						purpose:
							'Preparat se može koristiti i kao pomoćno sredstvo za ublažavanje tegoba digestivnog trakta ( čir na želucu i dvanaestopalačnom crevu, katar creva, kolitis).',
						effects: 'Tri puta dnevno po kafenu kašičicu pre jela.',
						limits: 'Obratiti pažnju na priloženo uputstvo za upotrebu.'
					},
					{
						id: 81,
						name: 'Biljne kapi za želudac',
						desc: 'TINCTURA STOMACHICA',
						image: 'kapi-zeludac.png',
						purpose:
							'Aktivni sastojci (etarska ulja, flavonoidi) deluju spazmolitično. Preparat olakšava varenje,  hrana se bolje razgrađuje i brže resorbuje. Daje se kod funkcionalnih smetnji organa za varenje.',
						effects: 'Piti tri puta dnevno po 30 kapi u malo vode pre jela.',
						limits: 'Preparat sadrži alkohol (etanol)!'
					}
				]
			},
			crevni: {
				id: 'crevni',
				name: 'Crevni sistem',
				desc: 'Lečenje i kontrola',
				image: 'bowels.png',
				products: [
					{
						id: 82,
						name: 'Bilax D',
						desc: 'Kapsule',
						image: 'bilax-d.png',
						purpose:
							'Biljni proizvod koji može doprineti lakšem pražnjenju creva.'
					},
					{
						id: 83,
						name: 'Karbofin forte',
						desc: 'Kapsule',
						image: 'karbofin-forte.png',
						purpose:
							'Dodatak ishrani sa biljnim ugljem i biljnim ekstraktima od značaja za održavanje zdravlja digestivnog sistema. Bez glutena.',
						effects:
							'Olakšava tegobe kod nadimanja, lošeg varenja, bolova u želucu nakon obilnih i masnih obroka.'
					},
					{
						id: 84,
						name: 'Ten Herbs',
						desc: 'Laksativ',
						image: 'ten-herbs.png',
						purpose:
							'Biljni digestiv i laksativ, bez glutena. Proizvod je namenjen osobama koje imaju zatvor, nadimanje, lenja creva',
						effects:
							'Ubrzava pražnjenje creva ne izazivajući grčeve i bolove pri pražnjenju.'
					},
					{
						id: 85,
						name: 'Isilax',
						desc: 'Sirup',
						image: 'isilax.png',
						purpose:
							'Dodatak ishrani sa biljnim ekstraktima, vlaknima i voćnim sokovima, namenjen deci i odraslima za regulisanje pražnjenja digestivnog trakta.',
						effects:
							'Poboljšava tranzit crevnog sadržaja i doprinosi normalnoj funkciji digestivnog trakta.'
					},
					{
						id: 86,
						name: 'Colosal',
						desc: 'Tablete',
						image: 'colosal.png',
						purpose:
							'Colosal je dodatak ishrani na bazi buterne kiseline, fruktooligosaharida (FOS) i živih kultura Bifidobacterium bifidum i Bifidobacterium lactis.',
						effects:
							'Tableta u celosti dospeva u debelo crevo, gde se rastapa i oslobađa komponente.'
					},
					{
						id: 87,
						name: 'Čaj od lanenog brašna',
						desc: 'Čaj',
						image: 'laneno-brasno.png',
						purpose:
							'Kao blagi laksativ usled prisutnih sluzi i celuloze u semenu, kod funkcionalnih poremećaja rada debelog creva. Kod upale želudačne sluznice i spolja.',
						effects:
							'Dva do 3 puta dnevno pojesti 1 kafenu kašiku celog ili izmrvljenog semena uz 200ml vode tokom jela. Kod gastritisa, 1-2 kafene kašike semena ostaviti da stoji u hladnoj vodi 20-30 min pa profiltrirati i piti.',
						limits: 'Ne sme se koristiti kod vezanih creva.'
					},
					{
						id: 88,
						name: 'Čaj od korena sladića',
						desc: 'Čaj',
						purpose:
							'Ublažuje tegobe kod čira na želucu i dvanestopalačnom crevu.',
						effects:
							'Pola kašičice usitnjenog slatkog korena preliti sa oko 200 ml ključale vode, sud poklopiti i posle 5 minuta procediti. Pije se šolja čaja više puta dnevno posle jela, ali ne duže od 4-6 nedelja.',
						limits:
							'Kod osoba sa kardio-vaskularnim smetnjama gde dolazi do zadržavanja natrijuma i hipokalemije ; kod šećerne bolesti, kod terapije hormonskim preparatima i oštećenja jetre upotrebu treba ograničiti. Ne preporučuje se trudnicama i dojiljama. Koren sladića ne treba koristiti duže od 4-5 meseci.'
					},
					{
						id: 89,
						name: 'Čaj od cveta divizme',
						desc: 'Čaj',
						image: 'divizma-caj.png',
						purpose:
							'Preporučuje se kod proliva izazvanih upalom crevne sluzokože.',
						effects:
							'Jednu kafenu kašičicu cveta divizme preliti sa 200 ml ključale vode, ostaviti da stoji 5 do 10 minuta, procediti i piti više puta dnevno po šolju čaja. Aktivni sastojci CVETA DIVIZME pokazuju protivupalno, antiseptično, antiviralno i analgetično delovanje. Prisutne sluzi oblažu iritiranu sluzokožu organa za varenje.'
					},
					{
						id: 90,
						name: 'Čaj od cveta nevena',
						desc: 'Čaj',
						image: 'cvet-nevena.png',
						purpose:
							'U terapiji čira na želudcu i dvanaestoplačnom crevu I kod hemoroida.',
						effects:
							'Aktivni sastojci nevena deluju protivupalno, antiseptično.Unutrašnja upotreba: Jednu do dve kafene kašike cveta nevena preliti šoljom (200ml) ključale vode. Sud poklopiti, ostaviti da stoji 10-15 min a zatim čaj procediti. Piti tri puta dnevno po šolju nezaslađenog čaja. Spoljašnja upotreba: Dve kašike cveta nevena preliti sa pola litra ključale vode. Sud poklopiti, ostaviti da stoji 10-15 min a zatim čaj procediti.'
					},
					{
						id: 91,
						name: 'Čaj od kore krušine',
						desc: 'Čaj',
						purpose: 'Olakšava pražnjenje creva i koristi se kod zatvora.',
						effects:
							'Kafenu kašičicu čaja preliti šoljom (200ml) hladne vode, zagrejati i sasvim malo prokuvati. Sud poklopiti i ostaviti da se čaj ohladi, a zatim procediti. Piti šolju čaja uveče pred spavanje, a po potrebi i ujutru pre jela.',
						limits:
							'Ne preporučuje se duža upotreba kao ni upotreba tokom trudnoće i dojenja. Kontraindikovana je upotreba kod ileusa (u narodu rečeno  zavazana creva).'
					},
					{
						id: 92,
						name: 'Čaj od korena maslačka',
						desc: 'Čaj',
						image: 'caj-koren-maslacak.png',
						purpose:
							'Kao gorko sredstvo za podsticanje apetita ,olakšava pražnjenje creva , kod poremećaja varenja.',
						effects:
							'Kafenu kašičicu usitnjenog korena maslačka preliti sa 200 ml hladne vode, zagrejati i pustiti da ključa 5 minuta i ostaviti da stoji 10 minuta a zatim čaj procediti. Piti tri puta dnevno po šolju čaja pre jela. Kafenu kašiku lista maslačka preliti sa 200 ml ključale vode. Sud poklopiti i ostaviti da stoji 15 min. Procediti i piti 3 puta dnevno po šolju čaja.'
					},
					{
						id: 93,
						name: 'KAPI KORENA MASLAČKA ',
						desc: 'Tinctura Taraxaci',
						image: 'kapi-maslacka.png',
						purpose:
							'Aktivni sastojci korena maslačka, usled gorkog ukusa povoljno deluju na podsticanje apetita i regulisanje varenja i olakšavaju pražnjenje creva.',
						limits:
							'Usled prisustva alkohola upotreba tinkture se ne preporučuje trudnicama, dojiljama i deci mlađoj od 12 godina. Kod osetljivih osoba može izazvati alergijske reakcije.'
					},
					{
						id: 94,
						name: 'Čaj od lista sene',
						desc: 'Čaj',
						image: 'list-sene.png',
						purpose:
							'Preporučuje se kod povremenih zatvora, za regulisanje stolice.',
						effects:
							'Jednu kafenu kašičicu lista sene preliti sa 200 ml ključale vode, sud poklopiti i ostaviti da odstoji 10 do 20 minuta. (Čaj se može pripremiti i na sledeći način: jednu kafenu kašičicu lista sene preliti sa 200 ml hladne vode, sud poklopiti i ostaviti da odstoji 12 sati.) Procediti i popiti jednu šolju čaja uveče pre spavanja.',
						limits:
							'Upotreba Čaja od lista sene se ne preporučuje tokom trudnoće i dojenja kao ni deci mlađoj od 12 godina. kod osetljivih osoba, može izazvati grčeve i stomačne bolove. Kontraindikovana je upotreba kod ileusa.'
					}
				]
			},
			dijareja: {
				id: 'dijareja',
				name: 'Dijareja',
				desc: '(Proliv)',
				image: 'diahrrea.png',
				products: [
					{
						id: 95,
						name: 'Kapi protiv dijareje',
						desc: 'Tinctura ANTIDIARRHOICA',
						purpose:
							'Preparat ima antidijaroično i antiseptično dejstvo zbog prisustva tanina, a ujedno smiruje i grčeve glatke muskulature creva. Preporučuje se uz dijetetski režim ishrane kod nespecifičnih akutnih dijareja. ',
						effects:
							'Tri do pet puta dnevno piti po 30 do 40 kapi sa vrućim čajem od kamilice',
						limits:
							'Ukoliko se uz primenu ovog preparata dijareja ne zaustavi u roku od 3 – 4 dana, neophodno je potražiti pomoć lekara.'
					},
					{
						id: 96,
						name: 'Bulacol 500',
						desc: 'Tablete',
						purpose:
							'Sadrži probiotskoi kvasac po imenu Saccharomyces boulardii. Ublažava intenzitet i trajanje stomačnih tegoba kao što su dijareja, nadutost, mučnina, bol u stomaku.'
					},

					{
						id: 97,
						name: 'EsenBak Direct',
						desc: 'Direct Ultra Strong',
						image: 'esenback-direct.png',
						purpose:
							'Kombinacija 8 pažljivo odabranih probiotskih sojeva iz rodova Bifidobacterium i Lactobacillus u dozi od 50 milijardi dobrih bakterija.'
					},
					{
						id: 98,
						name: 'Flonivin Boulardii',
						desc: 'Kapsule',
						image: 'flonivin-boulardii.png',
						purpose:
							'Flonivin Boulardii kapsule sa 10 milijardi korisnih mikroorganizama Saccharomyces boulardii, cinkom i vitaminom D3. Kod osoba sa akutnim i putničkim dijarejama, dijarejama uzrokovanim antibioticima, kod zapaljenskih bolesti creva.'
					},
					{
						id: 99,
						name: 'Aktivni ugalj',
						desc: 'Kapsule',
						image: 'aktivni-ugalj.png',
						purpose:
							'Prva pomoć za stomačne tegobe. Ublažava stomačne probleme.',
						effects: 'Rešava simptome mamurluka i nadutosti.'
					},
					{
						id: 100,
						name: 'Čaj od cveta divizme',
						desc: 'Čaj',
						purpose:
							'Preporučuje se kod proliva izazvanih upalom crevne sluzokože.',
						effects:
							'Jednu kafenu kašičicu cveta divizme preliti sa 200 ml ključale vode, ostaviti da stoji 5 do 10 minuta, procediti i piti više puta dnevno po šolju čaja. Aktivni sastojci CVETA DIVIZME pokazuju protivupalno, antiseptično, antiviralno i analgetično delovanje. Prisutne sluzi oblažu iritiranu sluzokožu organa za varenje'
					},
					{
						id: 101,
						name: 'Čaj od kore hrasta',
						desc: 'Čaj',
						image: 'kora-hrasta.png',
						purpose: 'Kao čaj protiv proliva (ne duže od 3-4 dana)',
						effects:
							'Aktivni sastojci kore hrasta deluju na skupljanje tkiva i virustatično. Unutrašnja upotreba: Kafenu kašiku kore hrasta preliti šoljom (oko 200ml) hladne vode, sud poklopiti i ostaviti preko noći. Ujutru čaj procediti. Ovu količinu čaja popiti u toku dana na gutljaje. Spoljašnja upotreba: Kafenu kašiku kore hrasta prokuvati sa pola litre vode, procediti i koristiti za grgljanje. Za obloge i kupke 20g (7 kafenih kašika kore hrasta) preliti sa 1l vode, zagrejati i pustiti da vri 10 minuta, pa procediti.',
						limits: 'Ne preporučuje se kod dečjih proliva.'
					},
					{
						id: 102,
						name: 'Čaj od lista borovnice',
						desc: 'Čaj',
						image: 'list-borovnice.png',
						purpose:
							'Mlad list sadrži « glukokinin » neomirtilin koji pokazuje antidijabetsko delovanje.Koristi se za lečenje bolesti organa za varenje. Plod se koristi kod proliva i blažih slučajeva enteritisa.',
						effects:
							'Supenu kašiku lista borovnice preliti sa 200 ml ključale vode. Sud poklopiti i posle 10 minuta procediti. Piti 2-3 puta dnevno po šolju nezaslađenog čaja. 1-2 kafene kašike ploda borovnice preliti sa 200 ml hladne vode, sud poklopiti i ostaviti da prenoći. Sutradan zagrejati do ključanja i procediti. Piti dve do tri šolje čaja dnevno.',
						limits:
							'Zbog nedostatka podataka o toksičnosti ne preporučuje se samomedikacija listom borovnice.'
					},
					{
						id: 103,
						name: 'Čaj od lista crnog čaja',
						desc: 'Čaj',
						image: 'list-crnog-caja.png',
						purpose:
							'Preporučuje se: kod upale sluzokože organa za varenje praćene dijarejom. Tradicionalno, crni čaj se koristi kao čaj za uživanje, kao preventiva mnogim bolestima i kao napitak za održanje željene telesne težine.',
						effects:
							'Usled sadržaja tanina, može doći do usporene resorpcije određenih lekova, naročito preparata gvožđa, stoga se preporučuje pauza od 30 minuta između uzimanja lekova i upotrebe čaja. Kafenu kašičicu lista crnog čaja preliti sa 200 ml ključale vode. Sud poklopiti i ostaviti da odstoji 3 do 5 minuta. Procediti i piti 2 do 3 šolje čaja dnevno.',
						limits:
							'Tokom trudnoće i dojenja izbegavati upotrebu većih količina crnog čaja.'
					},
					{
						id: 104,
						name: 'Čaj od lista kupine',
						desc: 'Čaj',
						image: 'list-kupine.png',
						purpose: 'Kupinov list se preporučuje kod akutnih proliva.',
						effects:
							'Supenu kašiku lista kupine preliti sa 200 ml ključale vode. Sud poklopiti i ostaviti da stoji 15 minuta. Čaj procediti i piti 2-3 puta dnevno po šolju čaja.'
					}
				]
			},
			štitna: {
				id: 'štitna',
				name: 'Štitna Žlezda',
				desc: 'Lečenje i kontrola',
				image: 'thyroid.png',
				products: [
					{
						id: 105,
						name: 'Selen 100',
						desc: 'Max Inpharm Tablete',
						image: 'selen-100.png',
						purpose:
							'Sadrži 100 mcg selena u jednoj tableti što je ujedno i maksimalna dnevna doza. Selen je esencijalni mineral i u našoj hrani ga nema dovoljno, a u našem organizmu nalazi se u tragovima. Doprinosi funkcionisanju imunog sistema, štitne žlezde, normalnoj spermogenezi, što ga čini veoma važnim mineralom.',
						effects:
							'Vrlo je moćan antioksidans i doprinosi neutralisanju efekata slobodnih radikala i smanjenju oštećenja koja su nastala pod njihovim dejstvom. Štiteći ćelije od oksidacije, on doprinosi sprečavanju preranog starenja kože, mišića i mozga'
					},
					{
						id: 106,
						name: 'Selen 100',
						desc: 'Solgar Tablete',
						image: 'selen-solgar.png',
						purpose:
							'Selen spada u mikroelemente organizma, sastavni je deo enzima prisutnih u našem organizmu čiji je zadatak zaštita organizma od oksidativnog stresa koji prouzrokuje oštećenja. Enzimi koji u svojoj strukturi sadrže selen su glutation peroksidaza, superoksid-dismutaza (SOD) i glutation transferaza.',
						effects:
							'Selen unapređuje zaštitnu ulogu imunološkog sistema poboljšavanjem delovanja T-limfocita i makrofaga koji čiste krv od štetnih toksina. Važan je detoksikator jetre od mogućih oštećenja pesticidima, hormonima, lekovima, teškim metalima, nusproduktima. Selen ima korisna dejstva u svim stanjima oslabljenog imuniteta, kod kardiovaskularnih tegoba, problema sa štitnom žlezdom, u prevenciji starenja i propadanja ćelija, kao i za unapređenje i zaštitu zdravlja.'
					},
					{
						id: 107,
						name: 'Selen+Zn',
						desc: 'Direct Kesice',
						image: 'selen-zn.png',
						purpose:
							'Kombinacija dva važna minerala Selena i Zinka u direkt formi. Doprinosi normalnoj funkciji imunog sistema i tireoidne žlezde, normalnoj plodnosti i održavanju normalnog stanja kože, kose i noktiju.',
						effects:
							'Selen i cink su važni minerali koji jačaju zdravlje celog organizma.Selen je moćan antioksidans koji: Štiti ćelije i tkiva od štetnog uticaja slobodnih radikala što usporava starenje, utiče na plodnost muškarca tako što podstiče spermatogenezu. Neophodan je za zdravlje prostate. Deluje imunostimulativno što je od izuzetne važnosti za jačenje imunog sistema. Učestvuje u proizvodnji aktivnih hormona štitne žlezde što je neophodno za njeno pravilno funkcionisanje.'
					},
					{
						id: 108,
						name: 'Primed 7',
						desc: 'Preparat',
						purpose:
							'Prirodan preparat, napravljen po proverenoj recepturi, na bazi meda i ekstrakta zelenih oraha. Ne sadrži veštačke boje, konzervanse i druge aditive. Preporučuje se kod: oslabljenje funkcije štitaste žlezde (Hashimoto tireoiditis ili drugi proces koji dovodi do oštećenja funkcije štitaste žlezde),',
						effects:
							'Povećane potrebe za unosom joda iz prirodnih izvora. Prirodan sastav preparata obezbeđuje dobru apsorpciju i iskorišćenost aktivnih sastojaka. Svakodnevnom upotrebom PRIMED 7 preparata obezbeđuje se optimalan dnevni unos joda. Blagotvorno deluje na simptome koji prate smanjenu funkciju štitaste žlezde, kao dopuna osnovnoj terapiji. Blagotvorno deluje na usporavanje toka Hashimoto tireoiditisa i pomaže očuvanje funkcije štitaste žlezde.'
					},
					{
						id: 109,
						name: 'Tirox',
						desc: 'Biljne Kapi',
						image: 'tirox.png',
						purpose:
							'Tirox Biljne kapi za regulisanje rada štitne žlezde pomažu kod: Smanjene funkcije štitne žlezde, Povećane funkcije štitne žlezde,Kod pojave nodusa na štitnoj žlezdi, Metaboličkih poremećaja',
						effects:
							'Biljne kapi sadrže sledeće biljne tinkture u svom sastavu: tinktura gloga, tinktura bele imele, tinktura valerijane, tinktura matičnjaka, tinktura, srdačice, tinktura virka'
					}
				]
			},
			pluća: {
				id: 'pluca',
				name: 'Pluća',
				desc: 'Donji Respiratorni Trakt',
				image: 'lungs.png',
				products: [
					{
						id: 110,
						name: 'Altiprim P',
						desc: 'Tablete',
						image: 'altiprim.png',
						purpose:
							'Sadrži sirup korena belog sleza, ekstrakt korena jagorčevine, tinkturu nadzemnog dela timijana i med - sastojke prirodnog porekla koji mogu imati pozitivan uticaj na zdravlje disajnih organa.',
						effects:
							'Ovi sastojci blagotvorno deluju na sluzokožu disajnih organa i štite je od nadražaja, razređuju gusti bronhijalni sekret, pospešuju izlučivanje sluzi iz bronhija i olakšavaju disanje i iskašljavanje. Sirup se preporučuje kao sredstvo koje može pružiti olakšanje kod blagih tegoba disajnih puteva praćenih gustim bronhijalnim sekretom i kašljem.Način primene: Uzima se četiri puta dnevno po jedna kafena kašika.',
						limits:
							'Ne sme se prekoračiti preporučena dnevna doza. Pre upotrebe sadržaj bočice promućkati. Ne preporučuje se za upotrebu kod dece mlađe od 3 godine starosti.'
					},
					{
						id: 111,
						name: 'Prospan',
						desc: 'Sirup',
						image: 'prospan.png',
						purpose:
							'Prospan sirup je biljni lek koji se koristi za ublažavanje simptoma akutnih i hroničnih zapaljenskih oboljenja disajnih puteva praćenih produktivnim kašljem.',
						limits:
							'Lek Prospan ne smete koristiti ako ste alergični (preosetljivi) na bršljan ili na druge biljke iz familije Araliaceae, ili na bilo koji drugi sastojak ovog leka. Lek se ne sme davati deci ispod 2 godine starosti zbog rizika od pogoršanja respiratornih simptoma.'
					},
					{
						id: 112,
						name: 'Herba Med No.29',
						desc: 'Čajna mešavina',
						image: 'herbamed29.png',
						purpose:
							'Sadrži sve lekovite supstance biljaka koje mogu da ojačaju otpornost sluznice respiratornog trakta, obnavljaju njene oštećene ćelije i vraćaju joj normalnu zaštitnu funkciju. Namenjena je kod bronhitisa.',
						effects:
							'Mešavina će vam pomoći upravo kako bi se obezbedilo normalno funkcionisanje sluzokože respiratornog sistema.'
					},
					{
						id: 113,
						name: 'Bioeliksir Sinbio',
						desc: 'Kapi',
						image: 'bioeliksir.png',
						purpose:
							'Sinbio sadrže svež sok ploda divljeg krastavca i pomoćne supstance. Sinbio kapi deluju pozitivno na disajne organe i pomažu pri izbacivanju nazalnog sekreta.',
						effects:
							'Aktivni sastojci preparata potiču iz soka biljke divlji krastavac (Ecballium elaterium (L.) A. Rich) iz familije Cucurbitaceae.'
					},
					{
						id: 114,
						name: 'Bio-Teo komplet br.6',
						desc: 'ČISTI PLUĆA I BRONHIJE',
						image: 'bioteo6.png',
						purpose:
							'Biljni komplet br. 6 za pluća i disajne puteve sastavljen je od 2 različita proizvoda (seta biljnih kapi) namenjen zdravlju respiratornih organa. Pomaže kod bronhitisa, alergijskog bronhitisa, alergija i astme.'
					},
					{
						id: 115,
						name: 'Čaj od nadzemnog dela čestoslavice',
						desc: 'Čaj',
						image: 'cestoslavica-caj.png',
						purpose:
							'Preporučuje se : kao tonik, za jačanje organizma kao i za ublažavanje različitih tegoba organa za disanje, kao sredstvo za iskašljavanje kod bronhitisa i astme.',
						effects:
							'Način pripreme i upotrebe čaja: Jednu kafenu kašičicu herbe čestoslavice preliti šoljom (200ml) ključale vode, ostaviti da stoji pola sata, procediti. Piti 2 do 3 puta dnevno po šolju čaja.'
					},
					{
						id: 116,
						name: 'Čaj od bokvice',
						desc: 'Čaj',
						image: 'list-bokvice.png',
						purpose:
							'Koristi se za ublažavanje tegoba kod bolesti organa za disanje, posebno kod hroničnog bronhitisa, upale sluzokože usta i grla.',
						effects:
							'Supenu kašiku čaja od lista bokvice preliti šoljom (200ml) ključale vode. Sud poklopiti i ostaviti da stoji 10 minuta. Čaj procediti. Piti dve do tri šolje čaja dnevno. Spolja u vidu obloga ili za ispiranje.'
					}
				]
			},
			jetra: {
				id: 'jetra',
				name: 'Jetra',
				desc: 'Lekovi i preparati',
				image: 'jetra.png',
				products: [
					{
						id: 117,
						name: 'Livorex Forte',
						desc: 'Tablete',
						image: 'livorex.png',
						purpose:
							'Prirodni dijetetski proizvod sa 12 aktivnih sastojaka, namenjen za detoksikaciju, zaštitu i obnovu jetre. Livorex Forte se preporučuje pacijentima koji imaju masnu jetru, hepatitis, toksična oštećenja jetre (od alkohola ili lekova) ili cirozu jetre.',
						effects:
							'Sadrži visoko prečišćene ekstrakte mlečnog čkalja (badelj, sikavica), slatkog korena, indijske kosmulje, vitamin E i celokupan kompleks vitamina B (B1, B2, B3, B5, B6, B7, B9 i B12). Njegovih 12 aktivnih sastojaka imaju: antiinflamatorno, antioksidativno i regenerativno dejstvo, a kompleks svih B vitamina pruža i potpornu metaboličku funkciju (omogućava jetri da se rastereti). Kao rezultat ovih dejstava imamo izražen hepatoprotektivni efekat.',
						limits:
							'Preventivno se savetuje i svima koji u dužem vremenskom periodu imaju povišene transaminaze ili žele da očiste organizam od toksina. '
					},
					{
						id: 118,
						name: 'Liv 52',
						desc: 'Tablete',
						image: 'liv52.png',
						purpose:
							'Pomaže obnavljanje funkcije jetre i uspostavljanju normalnih nivoa enzima jetre ALT i AST, kao i povećanju nivoa albumina u plazmi, ',
						effects:
							'Samim tim omogućava brži oporavak. Ima mogućnost da zaštiti osnovnu funkcionalnu ćeliju jetre, hepatocit, od toksičnih djelovanja alkohola, nekih lijekova i hemijskih supstanci.',
						limits:
							'Preporučuje se kod svih oboljenja, djece starije od 12 godina i odraslih, gdje je funkcija jetre smanjena. '
					},
					{
						id: 119,
						name: 'Hepalife',
						desc: 'Tablete',
						image: 'hepalife.png',
						purpose:
							'Hepatoprotektor nove generacije sa silibinom aktivnom formom silimarina, uz dodatak još tri aktivna principa. Preporučuje se u terapiji masne jetre, kod hroničnih inflamatornih oboljenja jetre (hepatitis B i C), u terapiji toksičnog oštećenja jetre (alkohol, lekovi i drugi štetni agensi) kao pomoćna terapija kod ciroze jetre i kod hroničnih oštećenja od kamena u žuci.'
					},
					{
						id: 120,
						name: 'Hepadiet',
						desc: 'Tablete',
						image: 'hepadiet.png',
						purpose:
							'Dijetetski dodatak ishrani koji sadrži biljne ekstrakte i druge supstance koje ga čine korisnim kod lošeg funkcionisanja jetre, povišenog holesterola, ateroskleroze i kod nedovoljnog lučenja žuči, za lakše varenje hrane.'
					},
					{
						id: 121,
						name: 'Livercare',
						desc: 'Tablete',
						image: 'livercare.png',
						purpose:
							'Jedinstvena kombinacija ekstrakata detoksikujućih biljaka kao što su sikavica, maslačak, kurkuma i artičoka.',
						effects:
							'Lipotropni faktori kao što su metionin, holin i inozitol takođe ulaze u njihov sastav i pomažu u očuvanju zdravlja jetre i celog organizma.'
					}
				]
			},
			pankreas: {
				id: 'pankreas',
				name: 'Dijabetes',
				desc: 'Kontrola dijabetesa',
				image: 'diabetes.png',
				products: [
					{
						id: 122,
						name: 'Hrom pikolinat 100 µg',
						desc: 'Solgar',
						image: 'hrompikolinat.png',
						purpose:
							'Sadrži patentirani hrom pikolinat (CHROMAX) koji osigurava izrazito stabilnu strukturu hroma i maksimalnu apsorpciju. CHROMAX je patentirani oblik trovalentnog hroma i pikolinske kiseline. Bioraspoloživost ovog patentiranog oblika potkrepljena je brojnim studijama koje ukazuju na njegovu superiornost u odnosu na ostale oblike hroma.',
						effects:
							'Hrom doprinosi normalnom metabolizmu makronutrijenata i održavanju normalnog nivoa glukoze u krvi.'
					},
					{
						id: 123,
						name: 'Alphalipoin forte',
						desc: 'Kapsule',
						image: 'alphalipoin.png',
						purpose:
							'Dodatak ishrani koji sadrži alfa-lipoinsku kiselinu, supstancu sa snažnim antioksidantnim dejstvom.',
						effects:
							'Alfa-lipoinska kiselina ima sposobnost da neutralizuje slobodne radikale i štiti ćelije od njihovog štetnog delovanja. Jedna gastrorezistentna kapsula sadrži 300 mg alfa-lipoinske kiseline.'
					},
					{
						id: 124,
						name: 'GLUCOkontrol',
						desc: 'Tablete',
						image: 'glucokontrol.png',
						purpose:
							'Dodatak ishrani namenjen za kontrolu komplikacija dijabetesa. Zahavljujući odabranim i izbalansiranim sastojcima, GLUCOkontrol smanjuje nivo glukoze i slobodnih radikala i ublažava oksidativni stres i posledice polineuropatije. ',
						effects:
							'Zahvaljujući alfa-lipolinskoj kiselini, pospešuje ugradnju glukoze u ćeliju i povećava osetljivost na insulin, dok drugi sastojci pomažu u stabilizaciji nivoa glukoze i lipida u krvi, doprinose normalnom metabolizmu i jačaju imuni sistem.'
					},
					{
						id: 125,
						name: 'R-LIPOINN®',
						desc: 'Tablete',
						image: 'rlipoinn.png',
						purpose:
							'Jedini preparat u našoj zemlji koji sadrži Natrijum R lipoat koji se u organizmu metaboliše u R alfa lipoinsku kiselinu – bez sintetičkog S oblika koji se nalazi u svim preparatima alfa lipoinske kiseline prisutnim na našem tržištu.'
					},
					{
						id: 126,
						name: 'Stevia Zero Cal',
						desc: 'Tablete',
						image: 'stevia.png',
						purpose:
							'Sadrže zaslađivač steviju, koji je jedina prirodna zamena za šećer. Steviju koristimo da zasladimo napitak ili hranu, bez griže savesti da ćemo uneti previše kalorija u svoj organizam i da ćemo opteretiti svoje telo šećerom ili veštačkim zaslađivačem.',
						effects:
							'Stevija je ekstrakt biljke Stevia Rebaudiana, bezbednija  je od ostalih zaslađivača i nema neželjenih efekata. Ova biljka iz familije Asteraceae, poreklom iz Južne Amerike, sadrži u sebi pektin, A, C i B vitamine, mikroelemente (kalijum, magnezijum, kalcijum), antioksidanse i amino kiseline.'
					}
				]
			},
			urinarni: {
				id: 'urinarni',
				name: 'Urinarni trakt',
				desc: 'Lečenje urinarnog trakta',
				image: 'urinary.png',
				products: [
					{
						id: 127,
						name: 'Čaj noćnog mokrenja kod dece',
						desc: 'Čaj',
						image: 'nocno-mokrenje.png',
						effects:
							'Sastojci ovog čaja, svojim protivupalnim i antiseptičnim efektom povoljno deluju na eventualnu iritaciju sluzokože mokraćnih kanala, a spazmolitičnim efektom deluju na ublažavanje grčeva ili bolova.'
					},
					{
						id: 128,
						name: 'Čaj kod upale mokraćne bešike',
						desc: 'Čaj',
						image: 'mokracna-besika.png',
						effects:
							'Sastojci ovog čaja, svojim antimikrobnim dejstvom deluju na uzročnike bakterijskih infekcija i upale mokraćne bešike, a spazmolitičnim efektom povoljno deluju na ublažavanje grčeva i bolova.Takođe, aktivni sastojci svojim diuretičnim efektom povoljno deluju na olakšanje izmokravanja.'
					},
					{
						id: 129,
						name: 'Čaj kod zapaljenja bubrega',
						desc: 'Čaj',
						image: 'zapaljenje-bubrega.png',
						effects:
							'Sastojci ovog čaja, svojim antimikrobnim dejstvom deluju na uzročnike bakterijskih infekcija urinarnog sistema, takođe, svojim diuretičnim efektom povoljno deluju na olakšanje izmokravanja. Aktivni sastojci deluju i protivupalno, kao i na ublažavanje grčeva i bolova kod upale bubrega.'
					},
					{
						id: 130,
						name: 'Čaj za ublažavanje tegoba kod mioma',
						desc: 'Čaj',
						image: 'ublazavanje-mioma.png',
						effects:
							'Aktivni sastojci lekovitog bilja svojim diuretičnim efektom olakšavaju mokrenje.Preporučuje se: ženama, kod obilnih menstrualnih krvarenja, bolova, osećaja težine i pritiska u donjem delu stomaka, kod tegoba sa mokrenjem izazvanih prisustvom mioma.'
					},
					{
						id: 131,
						name: 'Čaj za ublažavanje tegoba kod kamena u bubregu',
						desc: 'Čaj',
						image: 'kamen-u-bubregu.png',
						effects:
							'Aktivni sastojci lekovitog bilja svojim diuretičnim efektom povoljno deluju na olakšanje izmokravanja i na sprečavanje formiranja peska i kamena u bubrezima. Takođe, antiseptično dejstvo deluje preventivno na eventualne infekcije mokraćnih kanala, a jedinjenja sa spazmolitičnim efektom deluju na ublažavanje bolova i grčeva glatke muskulature mokraćnih puteva.'
					}
				]
			},
			menopauza: {
				id: 'menopauza',
				name: 'Menopauza',
				desc: 'Olakšavanje menopauze',
				image: 'menopause.png',
				products: [
					{
						id: 132,
						name: 'Genestin forte',
						desc: 'Genestin',
						image: 'genestin.png',
						purpose:
							'Prirodno rešenje problema u menopauzi: Talasi vrućine, umor, nesanica, glavobolja, razdražljivost, noćno znojenje, krvni pritisak, oslabljen kvalitet kose i noktiju, osteoporoza, depresivnost...',
						effects:
							'Dodatak ishrani bogat standardizovanim biljnim extraktima. Ovako složen sastav Genestin forte tableta omogućava da se pokrije kompleksna slika pre i menopauze .Iz biljke Preslice je dobijen 2 % extract organskog silicijuma koji je od primarnog značaja za metabolizam kalcijuma, magnezijuma, i mnogih drugih elemenata bitnih za očuvanje koštane mase kao i za kvalitet kose i noktiju.Zahvaljujući kompleksnom sastavu Genestin forte efikasno ublažava probleme menopauze.'
					},
					{
						id: 133,
						name: 'Dietpharm Refemin',
						desc: 'Suplement',
						purpose:
							'Refemin je dijetetski suplement sa ekstraktom korena cimicifuge, namenjen ženama u predmenstrualnom periodu i periodu menopauze.',
						effects:
							'Cimicifuga racemosa doprinosi smanjenju osećaja nelagodnosti u menopauzi.Doprinosi normalnoj menopauzi i normalnom mentalnom i fizičkom stanju žena u menopauzi.'
					},
					{
						id: 134,
						name: 'Luprinn',
						desc: 'Kapsule',
						image: 'luprinn.png',
						purpose:
							'Profil delovanja sličan endogenom E2.Bezbedna alternativa hormonskoj terapiji.Komforna primena.',
						effects:
							'Efikasno reguliše neprijatne simptome menopauze.Direktna absoprcija, visoka bioraspoloživost.Redukuje pojavu valunga, nesanice i povećane razdražljivosti nakon 4 nedelje.'
					},
					{
						id: 135,
						name: 'Meno Flavon',
						desc: 'Maxmedica',
						image: 'menoflavon.png',
						purpose:
							'Formulisane su na bazi ekstrakta semena soje. Seme soje je veoma bogat izvor izoflavona, koji imaju fiziološko delovanje slično estrogenu i deluju protektivno, ublažavajući sve simptome menopauze.',
						effects:
							'Preporučuje se primena Meno Flavon kapsula u menopauzi, u cilju ublažavanja simptoma koji je prate:valunga (osećaj velike toplote),osećaja umora i iscrpljenosti,promena raspoloženja,poremećaja spavanja i lošeg sna ,kao i smanjenja rizika od pojave: osteoporoze ,kardiovaskularnih bolesti.'
					},
					{
						id: 136,
						name: 'Menopace',
						desc: 'Suplement',
						image: 'menopace.png',
						purpose:
							'Podrška ishrani za vreme i nakon menopauze.Posebna formulacija sa preko 20 vitamina i minerala i niskim doza sojinih izoflavona.Namenjen ženama u menopauzi i nakon nje. 85% efikasnosti u otklanjanju fizičkih i psihičkih simptoma menopauze.',
						effects:
							'Nutritivni balans tokom i nakon menopauze:Žene se sve više trude da na prirodan način, održe dobro zdravlje tokom menopauze. Menopace® je sveobuhvatna formula sastavljena od 21-og nutrienta i može se koristiti samostalno ili uporedo sa hormonskom terapijom (HRT).'
					}
				]
			}
		}
	},
	noge: {
		id: 'noge',
		name: 'Noge',
		desc: 'Noge',
		image: 'legs.png',
		parts: {
			butine: {
				id: 'butine',
				name: 'Butine',
				desc: 'proširenih vena',
				image: 'veins.png',
				products: [
					{
						id: 137,
						name: 'AVARICON® HEMOR',
						desc: 'Krem',
						purpose:
							'Ima umirujuća, antiseptička i regenerativna svojstva pogodna za negu iritirane kože i sluznice analne regije. Formula za negu i ublažavanje tegoba upaljene, bolne, iritirane kože i sluznice analne regije.',
						effects:
							'Zahvaljujući blagotvornom dejstvu lekovitih sastojaka i posebnoj formulaciji njihovih koncentracija, Avaricon hemor krem posebno pogoduje osobama koje pate od tegoba koje stvara upaljena, bolna i iziritirana i/ili isušena koža i sluznica analne regije (hemoroidi, analna fisura). Hamamelis je u tradicionalnoj medicini poznat po svojim antiinflamatornim, regenerativnim i lokalnim hemostatskim svojstvima zbog kojih se decenijama koristi kao pomoć u terapiji hemoroida.'
					},
					{
						id: 138,
						name: 'Cedralex',
						desc: 'Krem',
						image: 'cedralex.png',
						purpose:
							'Svojom bogatom teksturom nežno hidrira kožu i uz trenutni efekat hlađenja umanjuje osećaj teških i umornih nogu. Nelepljiva, brzo upijajuća formulacija koja ne ostavlja tragove omogućava lako nanošenje tokom celog dana, pružajući osećaj lakoće u nogama.'
					},
					{
						id: 139,
						name: 'Venodia plus',
						desc: 'Tablete',
						image: 'venodiaplus.png',
						purpose:
							'Dodatak ishrani koji sadrži diosmin, hesperidin, ekstrakte borovnice i koprive, koji mogu doprineti očuvanju periferne cirkulacije.',
						effects:
							'Glavni aktivni sastojci su diosmin i hesperidin prirodnog porekla. Diosmin i hesperidin mogu povoljno uticati na povećanje venskog tonusa i otpornost kapilara. Ekstrakt lista koprive povoljno utiče na cirkulaciju u stopalima i može doprineti smanjenju osećaja umornih i teških nogu. Doprinosi eliminaciji štetnih sastojaka i drenaži organizma. Ekstrakt borovnice može doprineti održavanju elastičnosti krvnih sudova, povoljno deluje na mikrocirkulaciju i smanjenje osećaja teških nogu.'
					},
					{
						id: 140,
						name: 'Venogel',
						desc: 'Gel',
						image: 'venogel.png',
						purpose:
							'Biljni preparat u obliku gela. Sadrži kombinaciju prirodnih sastojaka koji trenutno otklanjaju bol, otok, grčeve u nogama, neutrališu osećaj teških nogu i vitalizuju kožu.',
						effects:
							'Jedinstvena Vitalisova formula neutrališe proširene vene i popucale kapilare brzo, lako i potpuno prirodno. Venogel pospešuje cirkulaciju, jača i tonizira zidove krvnih sudova, štiti krvne sudove od upale i neguje kožu.'
					},
					{
						id: 141,
						name: 'Erbaven retard',
						desc: 'Dijetetski dodatak',
						image: 'erbaven.png',
						purpose:
							'Dodatak ishrani koji redovnom upotrebom otklanja tegobe proširenih vena, poboljšava perifernu mikrocirkulaciju i sprečava pucanje kapilara.',
						effects:
							'Otklanja osećaj umora i težine u nogama, kao i osećaj svraba koji se javlja kod osoba sa proširenim venama. Redovno korišćenje kapsula takođe sprečava pojavu hemoroida i uklanja tegobe ukoliko su se već pojavile.'
					}
				]
			},
			zglob: {
				id: 'zglob',
				name: 'Skočni zglob',
				desc: 'Zglobovi Noge',
				image: 'ankle.png',
				products: [
					{
						id: 142,
						name: 'Arthronal',
						desc: 'Kapsule',
						image: 'arthronal.png',
						purpose:
							'Arthronal je izbalansirana kombinacija 11 aktivnih sastojaka za regeneraciju hrskavice i bolju pokretljivost zglobova.Povoljno utiče na bol i ograničenu pokretljivost kod pacijenata sa osteartrozom kolena, kuka, malih zglobova šake ručja, odnosno kod osteoartroze na nivou kičmenog stub. Pomaže u oporavku nakon povreda ligamenata i ostalih glavnih ili sporednih elemenata zglobova.',
						effects:
							'Potpomaže normalno stvaranja kolagena, vezivnog tkiva i normalnu koštanu funkciju.Poboljšava fukcionalni kapacitet zglobova.Potpomaže zdrav inflamatorni odgovor.'
					},
					{
						id: 143,
						name: 'Cartinorm',
						desc: 'Prašak za oralni rastvor',
						image: 'cartinorm.png',
						purpose:
							'Dodatak ishrani sa zaslađivačima sa ukusom pomorandže, limuna i ananasa.Cartinorm +  BIOcollagen se preporučuje kod: očuvanja zdrave hraskavice i ublažavanje simptoma već nastale artroze (zahvaljujući visokim dozama glukozamin-sulfatai hondroitin-sulfata), za regeneraciju hrskavice uz pomoć Fortigel bioaktivnog peptida kolagena kod osteoartritisa, kod sportista za održavanje zdravlja zglobova i povećanje fizičkih performansi.',
						effects:
							'Glukozamin je gradivna komponenta hrskavice. Ima povoljne efekte na očuvanje i održavanje optimalne funkcije hrskavice i zglobova i to normalizujući funkciju hondrocita (ćelija hrskavice).Hondroitin-sulfat je glavna komponenta hrskavice, konstruktivni sastojak proteoglikana koji obezbeđuje mehanička i elastična svojstva hrskavice. Deficit hondroitin-sulfata u hrskavici je povezan sa pojavom osteoartritisa.'
					},
					{
						id: 144,
						name: 'Flexaktiv 9',
						desc: 'Tablete',
						image: 'flexaktiv9.png',
						purpose:
							'Flexaktiv je dijetetski suplement namenjen za zglobove i kosti.Flexaktiv 9 tablete namenjene su za preventivnu zaštitu zglobova, kod intenzivnih fizičkih aktivnosti,kod upalnih procesa vezivnog tkiva, kao dopunska terapija kod degenerativnih i zapaljenskih promena na zglobovima (osteoarthritis, reumatoidni artritis, juvenilni artritis, giht).Preporučuju se starijim ljudima, sportistima i rekreativcima.',
						effects:
							'Glukozamin je osnovni gradivni materijal zglobnih struktura. Indijski tamjan doprinosi održavanju normalne pokretljivosti zglobova.Rizoma kurkume smanjuje otečenost zglobova, ima protivupalno dejstvo.Rizoma đumbira smanjuje bol kod osoba sa osteoartritisom.Vitamin C doprinosi normalnom stvaranju kolagena za normalnu funkciju kostiju i hrskavice te doprinosi zaštiti ćelija od oksidativnog stresa.Mangan doprinosi normalnom stvaranju vezivnog tkiva, doprinosi zaštiti ćelija od oksidativnog stresa te doprinosi održavanju normalnih kostiju.Selen doprinosi zaštiti ćelija od oksidativnog stresa.'
					},
					{
						id: 145,
						name: 'No-Dol max',
						desc: 'Tablete',
						image: 'nodol-max.png',
						purpose:
							'Preporučuju se kod hroničnih reumatskih tegoba, kao i kod sportskih povreda.',
						effects:
							'Dijetetski dodatak ishrani sa manganom, glukozaminom, kondroitinom, MSM kompleksom i biljnim ekstraktima aloje i đavolje kandže, koji povoljno utiče na pokretljivost zglobova. Olakšava tegobe izazvane hroničnim upalama zglobova, smanjuje bolove i oticanje, pospešuje pokretljivost zglobova i ubrzava oporavak nakon povreda i preloma.'
					},
					{
						id: 146,
						name: 'K2D3',
						desc: 'Tablete',
						image: 'k2d3.png',
						purpose:
							'Sadrži najoptimalniju kombinaciju dva esencijalna vitamina koji sinergistički deluju na jačanje kostiju. Preporučuje se uz kalcijum osobama koje boluju od osteoporoze',
						effects:
							'Poboljšava apsorpciju i upotrebljivost kalcijuma,usmerava kalcijum u kosti,podstiče izgradnju i regeneraciju kostiju,poboljšava mineralizaciju kostiju,povećava gustinu kostiju.K2D3 usmerava kalcijum u kosti umesto u krvne sudove što je istovremeno bitno i za zdravlje kostiju i za kardiovaskularno zdravlje.'
					},
					{
						id: 147,
						name: 'Hyalfit',
						desc: 'Kapsule',
						image: 'hyalfitkapsule.png',
						purpose:
							'Preporučuje se primena Hyalfit kapsula kod: osteoartritisa, degenerativne bolesti zglobova, artritisa kolena, lakta, ramena, kuka, šake i stopala, reumatoiodnog artritisa, povreda zglobova, bolova pri kretanju, u stanju mirovanja i ukočenosti zglobova.',
						effects:
							'Kolagen utiče na ćelije hrskavice i kostiju tako što stimuliše povećanje proizvodnje dodatnog, novog kolagena i sprečava razgradnju već postojeće strukture hrskavice. Time se poboljšava pokretljivost zglobova .Boswellia ublažava proces upala, pozitivno deluje kod ublažavanja simptoma osteoartritisa, pomaže kod bolova u zgobovima, jutarnje ukočenosti i poboljšava pokretljivost zglobova. Hondroitin sulfat je važna strukturna komponeneta hrskavice i pomaže kod otpornosti na pritisak u zglobu. Hijaluronska kiselina ima esencijalnu ulogu u održavanju normalne funkcije zglobova'
					},
					{
						id: 148,
						name: 'Vitalis Sports Cream',
						desc: 'Krem',
						image: 'sportscream.png',
						purpose:
							'Sports cream je biljni antireumatik, efikasan kod reume, artritisa, sportskih povreda, bolova u leđima, ukočenog vrata, tegoba kod poslovnih ljudi. Zaustavlja reumatske i sportske bolove.',
						effects:
							'Trenutno ublažava bol.Eukaliptus, nana, ruzmarin i aloe vera će vratiti mladost Vašim zglobovima.Sports cream ne samo da ublažava bol nego i jača hrskavicu i poboljšava cirkulaciju u samom zglobu.'
					},
					{
						id: 149,
						name: 'Artox Gel',
						desc: 'Gel',
						image: 'artoxgel.png',
						purpose:
							'Zahvaljujući osmotskom dejstvu i njegovim isparljivim komponentama, ovaj proizvod je koristan za oslobađanje od bolova u mišićima ili zglobovima.',
						effects:
							'Aktivni sastojci Artox gela ostvaruju i antizapaljenska, antiedematozna i analgetska svojstva delujući povoljno na smanjenje bola, otoka i upale.'
					},
					{
						id: 150,
						name: 'Hyalfit',
						desc: 'Gel',
						image: 'hyalfitgel.png',
						purpose:
							'Hyalfit gel je preparat namenjen za masažu sa umirujućim dejstvom na mišiće, ligamente i zglobove sa efektom hlađenja.Kreiran je za brzo i dugotrajno olakšanje i uklanjanje bol.',
						effects:
							'Mentol u kombinaciji sa alkoholom prokrvljuje, hladi i pomaže da se bolje apsorbuju aktivne supstance.Preparat sadrži uravnoteženu kombinaciju tri vrste biljaka (indijski tamjan - Boswellia serrata, gavez- Symphytum officinale, divlji kesten- Aesculus hyppocastanum) sa blagotvornim dejstvom na celokupni koštano-mišićni sistem.Hyalfit gel je dodatno obogaćen hijaluronskom kiselinom, koja je sastavni deo sinovijalne tečnosti zglobova.'
					},
					{
						id: 151,
						name: 'Cetilar',
						desc: 'Krem',
						image: 'cetilar.png',
						purpose:
							'Cetilar krem je nova formula brzog dejstva za lokalnu upotrebu kod traumatičnih i artritičnih bolova u zglobovima, mišićima i tetivama.',

						effects:
							'Koja poboljšava funkciju zglobova, povećava obim pokreta i ublažava bol.Zbog svojih odličnih svojstava hlađenja i podmazivanja, proizvod je pogodan za sportsku i terapijsku masažu, a koristi se i kao pomoć kod bolova u zglobovima, tetivama i mišićno-skeletnom sistemu.'
					},
					{
						id: 152,
						name: 'NEM',
						desc: 'Kapsule',
						image: 'nem.png',
						purpose:
							'Sadrže membranu ljuske jajeta u prahu koja je prirodan izvor proteina, prirodnog glukozamina, prirodnog hondroitin sulfata, prirodne hijaluronske kiseline i prirodnog kolagena tipa I.',
						effects:
							'Membrana ljuske jajeta sadrži identične komponente kao i ljudski zglobovi, tako da predstavlja koristan izvor hranljivih supstanci neophodnih za stalno obnavljanje hrskavice i vezivnog tkiva, održavanje punog kvaliteta zdravlja zglobne hrskavice i okolnih struktura.'
					},
					{
						id: 153,
						name: 'Biofreeze',
						desc: 'Gel',
						image: 'biofreeze.png',
						purpose:
							'Biljni ekstrakti Biofreeze gela predstavljaju analgetičku komponentu koja blagotvorno deluje na povređeno i oštećeno tkivo, u smislu lokalnog analgetičkog efekta. Bol uklanja brzo i efikasno. Prodire duboko i obezbeđuje produženo dejstvo.',
						effects:
							'Brzo i efikasno uklanja sve vrste bolova i grčeva uz prijatan osećaj hlađenja, podstiče cirkulaciju i olakšava tegobe nastale kao posledica proširenih vena: bol ,otok, napetost, trnjenje, grčeve, pucanje kapilara, osećaj “teških nogu”, pomaže kod sportskih povreda, istegnuća i uganuća, otklanja glavobolju, smanjuje bolove u vratu i leđima. Zbog svoje teksture analgetskog dejstva i osvežavajućeg mirisa mentola pogodan je za masažu.'
					}
				]
			}
		}
	},
	imunitet: {
		id: 'imunitet',
		name: 'Imunitet',
		desc: 'preparati za podizanje imuniteta',
		image: 'imunitet.png',
		parts: {
			imunitet: {
				id: 'imunitet-deo',
				name: 'Imunitet',
				desc: 'preparati za podizanje imuniteta',
				image: 'immune.png',
				products: [
					{
						id: 154,
						name: 'GinsengPlus',
						desc: 'Dijetetski suplement',
						image: 'ginsengplus.png',
						purpose:
							'GinsengPlus je dijetetski dodatak ishrani (dijetetski suplement) koji sadrži standardizovane biljne ekstrakte korejskog i sibirskog ženšena, gvarane, kola oraha, vitamin C i E , kreatin i karnitin.',
						effects:
							'Ovi aktivni sastojci se brzo apsorbuju i koriste u našem organizmu pružajući mu momentalni osećaj energije. Karnitin stimuliše proizvodnju energije na ćeliskom nivou i ima važnu ulogu u metabolizmu masnih kiselina, neophodan je za dobro funkcionisanje mišića. Kreatin omogućava maksimalno iskorišćenje ćelijskih energetskih rezervi, povećava energetski metabolizma mišića i odlaganju faze zamora tokom vežbanja.'
					},
					{
						id: 155,
						name: 'Omega 3',
						desc: 'Alkakaps',
						image: 'omega3.png',
						purpose:
							'Zа kаrdiovаskulаrnu prevenciju posle preležаnog infаrktа miokаrdа.Kod povećаnog nivoа trigliceridа i holesterolа u krvi.Kod povišenog krvnog pritiskа.Kod demencije, smаnjene koncetrаcije i gubitkа pаmćenjа, kod depresije i Alchаjmerove bolesti.'
					},
					{
						id: 156,
						name: 'Vitamini C, Cink, D3 1000',
						desc: 'BiVits Activa',
						image: 'vitamini.png',
						purpose:
							'Jedinstvena formulacija koja obezbeđuje snažnu, trostruku zaštitu imunskom sistemu. Jedna tableta na dan obezbeđuje optimalne doze ovih vitamina i minerala i doprinosi zdravlju organizma. Posebno se preporučuje u stanjima deficita ovih nutrijenata i oslabljenog imuniteta.',
						effects:
							'Doprinosi normalnoj funkciji imunog sistema, zdravlju nervnog i kardiovaskularnog sistema i antioksidativnoj zaštiti ćelija.'
					},
					{
						id: 157,
						name: 'Cinkić imuno',
						desc: 'Dodatak ishrani',
						image: 'cinkic.png',
						purpose:
							'Cinkić imuno je dodatak ishrani koji sadrži cink i vitamine A, C i D, koji doprinose normalnoj funkciji imunog sistema.',
						effects:
							'Pored toga:cink i vitamin A doprinose održavanju normalnog vida ,vitamin D je značajan za održavanje normalnih zuba i potreban za normalan rast i razvoj kostiju kod dece.'
					},
					{
						id: 158,
						name: 'Echinaid',
						desc: 'kapsule',
						image: 'echinaid.png',
						purpose:
							'Dodatak ishrani sa biljkama Echinacea purpurea i Echinacea angustifolia. Ove kaspule su kombinacija korena i listova spojenih sa standardizovanim ekstraktima cele biljke. Ova odlična kombinacija ima sva blagodetna dejstva sveže Echinacee u jednoj kapsuli visoke efikasnosti.',
						effects:
							'Svakodnevna upotreba Echinacee može sprečiti i/ili pomoći u borbi protiv prehlada, gripa i prisustva bakterija u gornjim respiratornim putevima antitela, te na taj način organizam postaje otporniji na napade patogenih mikroorganizama.'
					},
					{
						id: 159,
						name: 'Pro Beta Glukan',
						desc: 'kapsule',
						image: 'betaglukan.png',
						purpose:
							'Pro Beta Glukan 1275 mg sadrži punu dnevnu dozu od čak 1275 mg visokoprečišćenog (min 85%) beta (1,3 /1,6)-d glukana, izolovanog  iz kvasca Saccharomyces cerevisiae, uz dodatak probiotika Bifidobacterium animalis ssp. lactis BLC1; i antioksidansa vitamina C, D i cinka u punoj dnevnoj dozi.',
						effects:
							'Pro Beta Glukan®1275 mg ima širok spektar delovanja jer predstavlja kombinaciju beta glukana sa dobrim bakterijama, cinkom i vitaminima C i D. Na taj način delovanje je osnaženo i prošireno na sve one faktore koji utiču na poboljšanje opšteg stanja organizma pružajući mu potpunu zaštitu od virusa, bakterija, iscrpljenosti i stresa.'
					},
					{
						id: 160,
						name: 'Propomel',
						desc: 'kapi za odrasle',
						image: 'propomel.png',
						purpose:
							'Kod infekcija gornjih disajnih puteva, prehlade, gripa i drugih stanja praćenih povišenom temperaturom i malaksalošću - za jačanje odbrambene sposobnosti organizma - za ublažavanje simptoma oboljenja desni, sluzokože usta, grla i ždrela - u stanjima iscrpljenosti i stresa - za spoljašnju upotrebu, kod manjih oštećenja kože.',
						effects:
							'Propomel kapi za odrasle sadrže prečišćeni propolis u razblaženom etanolu.'
					},
					{
						id: 161,
						name: 'Oligogal Se',
						desc: 'kapsule',
						image: 'oligogal.png',
						purpose:
							'Jačanje imuniteta, održavanje prirodne ravnoteže u organizmu i usporavanje starenja.'
					},
					{
						id: 162,
						name: 'Omega junior',
						desc: 'kapi',
						image: 'omegajr.png',
						purpose:
							'Bogat izvor esencijalnih masnih kiselina iz serije omega 3 i omega 6 + GLA (biljnog porekla).',
						effects:
							'Omega junior kapi su izrađenje od visokoprečišćenih i standardizovanih biljnih ulja kontrolisanog porekla : Crne ribizle,Soje,Vitamin E,Vitamin B6,Ulje crne ribizle je jedinstven izvor GLA (gama-linoleinska kiselina) čije je prisustvo u organizmu neophodno za normalan rast i razvoj.Takođe ove esencijalne masne kiseline pomažu regulaciju epidermalne proliferacije i regeneraciju površinskih delova kože pa ih doktori preporučuju za ublažavanje simptoma atopijskog dermatitisa, ekcema ...'
					}
				]
			}
		}
	},
	kosti: {
		id: 'kosti',
		name: 'Skelet',
		desc: 'Lokomotorni Sistem',
		image: 'bones.png',
		parts: {
			kosti: {
				id: 'kosti-deo',
				name: 'Skelet',
				desc: 'Lokomotorni Sistem',
				image: 'bones.png',
				products: [
					{
						id: 163,
						name: 'Allga San akut Genu',
						desc: 'Mast',
						image: 'acut-genu.png',
						purpose:
							'Sa efektom zagrevanja je specijalna mast za kolena koja neguje i opušta napeta kolena tokom masaže. Ubrzava cirkulaciju i eliminiše medijatore zapaljenja.'
					},
					{
						id: 164,
						name: 'Aqua Ice',
						desc: 'Sprej',
						image: 'aqua-ice.png',
						purpose:
							'Zahvaljujući svom sastavu i bogatoj formulaciji aktivnih komponenti, pomaže kod ublažavanja tegoba nastalih usled nagnječenja, iščašenja i sportskih povreda. Postiže optimalni efekat uz maksimalnu bezbednost primene.',
						effects:
							'Povoljno deluje na ukočenost i napetost u mišićima, zglobovima i kostima.'
					},
					{
						id: 165,
						name: 'ARTHROGUARD',
						desc: 'Dodatak ishrani',
						image: 'arthroguard.png',
						purpose:
							'Dodatak ishrani na bazi glukozamina, hondroitin-sulfata, hidrolizata kolagena uz dodatak biljnih sastojaka i odabranih vitamina i minerala čije sinergističko dejstvo doprinosi održavanju zdravlja hrskavice i kostiju, formiranju vezivnog tkiva i kolagena.'
					},
					{
						id: 166,
						name: 'Arthronal',
						desc: 'Krem',
						image: 'arthronal.png',
						purpose:
							'Izbalansirana kombinacija 11 aktivnih sastojaka za regeneraciju hrskavice i bolju pokretljivost zglobova.',
						effects:
							'Povoljno utiče na bol i ograničenu pokretljivost kod pacijenata sa osteartrozom kolena, kuka, malih zglobova šake, odnosno kod osteoartroze na nivou kičmenog stuba.'
					},
					{
						id: 167,
						name: 'GAVEZ GEL',
						desc: 'Gel',
						image: 'gavebol.png',
						purpose:
							'Sa 10% ekstraktom gaveza kao aktivnom supstancom, predstavlja jedinstven preparat gaveza na našem tržištu. Primenjuje se kod :-Akutne povrede praćene hematomom-Distenzije i distorzije zglobova-Nagnječenja-Kontuzije-Sportske povrede-Upale tetiva.',
						effects: 'Sa rashladnim efektom.'
					},
					{
						id: 168,
						name: 'Cartigel',
						desc: 'Gel',
						image: 'cartigel.png',
						purpose:
							'Cartigel je jedinstvena kombinacija etarskih ulja, mentola i kamfora koja pomaže kod: Bolova u zglobovima i mišićima, Reumatskih tegoba, Sportskih povreda, Glavobolja, Bolova u vratu, Bolova u leđima, naročito kod išijasa, Fibromialgija.',
						effects:
							'Deluje protivupalno, poboljšava cirkulaciju na mestu bola i postiže blago anestezirajući efekat, pri čemu se osećaj bola postepeno smanjuje.'
					},
					{
						id: 169,
						name: 'Fortinn Cold',
						desc: 'Gel',
						image: 'fortinn.png',
						purpose:
							'U svom sastavu sadrži visoku koncentraciju aktivnih komponenata koje nakon nanošenja ostvaruju prijatan osećaj hlađenja i osveženja, obezbeđujući postepeno smanjenje upale i bola na mestu oboljenja ili povrede.',
						effects:
							'Kod tegoba nastalih usled reumatskih stanja, sa efektom hlađenja.'
					},
					{
						id: 170,
						name: 'Gavebol',
						desc: 'Gel',
						image: 'gavebol-quick.png',
						purpose:
							'Preparat koji sadrži 30% ekstrakta korena gaveza čiji osnovni sastojci omogućavaju primenu ovog gela kod istegnuća, iščašenja i različitih vrsta povredaNamena:- kod uganuća i iščašenja zglobova- reumatskih deformiteta ručnih i nožnih zglobova- nakon fraktura kostiju- kod posekotina, modrica i ujeda insekata.'
					},
					{
						id: 171,
						name: 'REUMA KUPKA',
						desc: 'Etarsko ulje',
						image: 'reuma.png',
						purpose: 'Etarsko ulje ruzmarina,Etarsko ulje zimzelena.',
						effects:
							'Blagotvorno dejstvo toplih lekovitih kupki poznato je od davnina.Reuma kupka sa visokom koncentracijometarskihulja ruzmarinai zimzelena povoljno deluje naperifernucirkulaciju, proširujekrvne sudove i povećavaprokrvljenostkože. Olakšava reumatsketegobe uzglobovima i mišićima,bolove u leđima i kičmenom stubu i smanjuje napetost muskulature.'
					},
					{
						id: 172,
						name: 'Khan Tigrov krem',
						desc: 'Gel',
						image: 'khan.png',
						purpose:
							'Preporučuje se kod reumatskih tegoba, lumbaga, neuralgija i ukočenosti, kao i kod uganuća, iščašenja i istegnuća nastalih prilikom sportskih ili rekreativnih aktivnosti.Zahvaljujući krem gel podlozi, Khan tigrov krem gel se može nanositi i lako razmazivati na sve delove tela, uključujući kosmate i eksponirane delove, ne ostavljajući masne tragove.'
					},
					{
						id: 173,
						name: 'Arnicare',
						desc: 'Gel',
						image: 'arnicare.png',
						purpose:
							'Arnica montana je tradicionalno u upotrebi još od XVI veka u tretmanu otklanjanja bola, ukočenosti i napetosti u mišićima i zglobovima.',
						effects:
							'Ekstrakti biljnih fenola iz cveta biljke Arnika montana  dokazano ispoljavaju protivupalno dejstvo ubrzo nakon nanošenja na osetljivo mesto, doprinoseći ublažavanju bola.Proizvodi gel, krem i stik za decu ne sadrže parabene, lanolin i mineralna ulja, kao ni veštačke boje i mirise. Ne lepi se, ne masti i brzo apsorbuje u kožu.'
					},
					{
						id: 174,
						name: 'ALPSKA',
						desc: 'Krem',
						image: 'alpenkrauter.png',
						purpose:
							'Specifična je po svom veoma prijatnom svežem mirisu, plavo-zelene boje.Alpska krema je idealna i kao terapija i pomoć sportistima.Ova krema velike efikasnosti primenjuje se nakon sportskih povreda, upala i istegnuća mišića.Takođe, pomoćiće vam i ako imate problem sa lošom cirkulacijom, bolove u nogama i venama, glavobolje.'
					},
					{
						id: 175,
						name: 'Brdjanski melem',
						desc: 'melem protiv reume',
						image: 'brdjanski-melem.png',
						purpose:
							'Nastao je pažljivim odabirom korisnih sastojaka uglavnom iz prirode našeg podneblja. To je jako važno, zato što smo se mi vekovima navikavali (adaptirali) da koristimo biljke iz svog okruženja. Naš organizam je pripremljen da izvuče najveću korist za sebe iz domaćih biljaka',
						effects:
							'Efikasno deluje kod lumbaga, artritisa, išijasa, spondiloze, zglobova i ostalih neuritisa, bolova u leđima, ramenu…'
					}
				]
			}
		}
	},
	masa: {
		id: 'masa',
		name: 'Telesna masa',
		desc: 'Mršavljenje i kontrola',
		image: 'weight.png',
		parts: {
			masa: {
				id: 'masa-deo',
				name: 'Telesna masa',
				desc: 'Mršavljenje i kontrola',
				image: 'weight.png',
				products: [
					{
						id: 176,
						name: 'Apuretin Slim',
						desc: 'Suplement',
						image: 'apuretin-slim.png',
						purpose:
							'Apuretin Slim je dodatak ishrani sa prirodnim sastojcima koji pomažu pri eliminaciji viška vode iz organizma, ubrzavaju metabolizam i redukuju telesnu težinu.'
					},
					{
						id: 177,
						name: 'Herbafast Fiber',
						desc: 'Suplement - Jagoda',
						image: 'herbafast-fiber.png',
						purpose:
							'Izaziva osećaj sitosti i sprečava nastanak masnih naslaga.',
						effects:
							'Vlakna vezuju vodu i zauzimaju prostor u želucu, pa je potreba za hranom manja.Pomaže da se masnoće ne vezuju i sprečava stvaranje masnih naslaga. Smanjuje se vreme zadržavanja ostataka hrane u crevima, a samim tim i zadržavanje štetnih materija.'
					},
					{
						id: 178,
						name: 'Herbafast Lady',
						desc: 'Kapsule',
						image: 'herbafast-lady.png',
						purpose: 'Kontrola telesne mase i mršavljenje',
						effects:
							'Herbafast lady kapsule sadrže posebnu kombinaciju probiotske kvasnice i snažnog antioksidansa, koja uzbija glad i žudnju za slatkišima i brzom hranom, smanjujući telesnu težinu.'
					},
					{
						id: 179,
						name: 'Jabukovo sirće + vitamin C',
						desc: 'Maxmedica',
						image: 'jabukovo-sirce-vitamin-c.png',
						purpose: `Preporučuje se:
											kod osoba na redukcionoj dijeti
											za ubrzanje metabolizma
											za regulaciju nivoa masti u krvi
											u cilju detoksikacije organizma
											za smanjenje umora i iscrpljenosti
											za normalno funkcionisanje imunološkog sistema
										`,
						effects:
							'Delujući principi poreklom iz jabukovog sirćeta povoljno utiču na regulaciju nivoa masti u krvi i ubrzanje metabolizma, a sa vitaminom C olakšavaju detoksikaciju organizma.'
					},
					{
						id: 180,
						name: 'Čaj za mršavljenje',
						desc: 'Čaj',
						image: 'caj-za-mrsavljenje.png',
						purpose:
							'Pomoćno sredstvo tokom dijete, kada je izmenjen režim ishrane, kao i za održavanje željene telesne težine.',
						effects:
							'Aktivni sastojci biljaka povoljno deluju na metabolizam regulisanjem varenja, eliminisanjem gasova, regulisanjem stolice a olakšavanjem izmokravanja i lučenja znoja ubrzava se eliminacija štetnih produkata.'
					}
				]
			}
		}
	}
}

export default body
