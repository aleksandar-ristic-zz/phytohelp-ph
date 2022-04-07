const body = {
	glava: {
		id: 1,
		name: 'Glava',
		desc: 'Glava',
		image: 'head.png',
		parts: {
			čelo: {
				id: 1,
				name: 'Glavobolja',
				desc: 'Glavobolja',
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
						purpose:
							'za preznojavanje - kod povišene telesne temperature, kod prehlade i gripa, za ublažavanje reumatskih bolova, kod glavobolje i migrene. Za spoljnu upotrebu, ispiranje čajem od kore vrbe preporučuje se za ubrzanje zarastanja rana.',
						effects: '',
						limits:
							'Upotreba Čaja od kore vrbe se ne preporučuje tokom trudnoće i dojenja kao ni deci mlađoj od 12 godina.'
					},
					{
						id: 4,
						name: 'Cvet gloga sa listom',
						desc: 'Čaj',
						image: 'glog.png',
						purpose:
							'i ekstrakti gloga imaju blagotvorno dejstvo na cirkulaciju i ublažavanje nervne napetosti, tako da se njihova upotreba preporučuje kod migrena i glavobolja uzrokovanih stresom.'
					},
					{
						id: 5,
						name: 'List zelenog čaja',
						desc: 'Čaj',
						image: 'zelenicaj.png',
						purpose:
							'uz visoki sadržaj anti-oksidanasa sadrži tein, jedinjenje koje blagotvorno deluje na ublažavanje varijacija u vazokonstrikciji i vazodilataciji krvnih sudova tokom migrenoznog napada, i njegova upotreba je najdelotvornija ukoliko se primeni što pre, pri pojavi prvih simptoma'
					},
					{
						id: 6,
						name: 'List pitome nane',
						desc: 'Čaj',
						image: 'nana.png',
						effects:
							'pomaže ublažavanju grčeva i olakšava varenje tako da se njegova upotreba preporučuje u slučajevima kada je okidač pojave napada problem u varenju određenih namirnica.'
					},
					{
						id: 7,
						name: 'List Artičoke',
						desc: 'Čaj',
						image: 'articoka.png',
						effects:
							'povoljno deluju na funkcije jetre i lučenje žuči, olakšanje varenja i regulisanje stolice, što može pomoći prevazilaženju opstipacije kao uzroka pojave migrene'
					}
				]
			},
			sinusi: {
				id: 2,
				name: 'Gornji disajni putevi',
				desc: 'zapušen nos, bol u grlu, promuklost i kašalj',
				image: 'sinusache.png',
				products: [
					{
						id: 1,
						name: 'Žalfija',
						desc: 'Etarsko ulje',
						purpose:
							'doprinosi umirenju iritacija usne duplje, grla i glasnih žica.',
						effects:
							'Otklanja glavobolju i olakšava disanje kod infekcija disajnih puteva.'
					},
					{
						id: 2,
						name: 'Pitoma nana',
						desc: 'Etarsko ulje',
						purpose: 'doprinosi normalnoj digestiji i imunitetu.',
						effects:
							'Pored toga, pozitivno utiče i na ublažavanje simptoma infekcija gornjih disajnih puteva, kao što su kašalj ili bolno grlo.'
					},
					{
						id: 3,
						name: 'Ekosept',
						desc: 'Fitopreparat',
						purpose:
							'koji sadrži etarsko ulje žalfije I pitomene nane.Koristi se u toku infekcija gornjih disajnih puteva,u toku infekcije sluzokože usne duplje I desni, kod iritacija izazvanih nošenjem ortodonskog aparata ili proteze i proteze I kod pušača za regulisanje bakterijske flore I osvežavanja daha.'
					},
					{
						id: 4,
						name: 'Propolis C-100',
						desc: 'Tablete',
						purpose:
							'jedinstven proizvod, jer u sebi sadrže čak 35mg ekstrakta propolisa .Koristi se u toku infekcija gornjih disajnih puteva, izazvanih virusima ili gram pozitivnim bakterijama kao što su upala ždrela, krajnika ili glasnih žica, u toku infekcija usne duplje izazvanih virusom herpes I kod bola u grlu.'
					},
					{
						id: 5,
						name: 'Altiprim P',
						desc: 'Sirup',
						purpose:
							'sadrži sirup korena belog sleza, ekstrakt korena jagorčevine, tinkturu nadzemnog dela timijana i med – sastojke prirodnog porekla koji mogu imati pozitivan uticaj na zdravlje disajnih organa. Sirup se preporučuje kao sredstvo koje može pružiti olakšanje kod blagih tegoba disajnih puteva praćenih gustim bronhijalnim sekretom i kašljem.',
						effects:
							'Ovi sastojci blagotvorno deluju na sluzokožu disajnih organa i štite je od nadražaja, razređuju gusti bronhijalni sekret, pospešuju izlučivanje sluzi iz bronhija i olakšavaju disanje i iskašljavanje.'
					},
					{
						id: 6,
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
						id: 7,
						name: 'Bronhocea',
						desc: 'Prašak za oralni rastvor',
						purpose:
							'pomaže u ublažavanju simptoma gripa i prehlade kao što su: kašalj, problemi sa disanjem, bol u grlu , povišena temperatura Zahvaljujući pažljivo odabranim sastojcima.',
						effects:
							'obezbeđuje normalno funkcionisanje gornjeg respiratornog sistema- smanjuje iritaciju grla i usne duplje- pomaže u održavanju normalne telesne temperature tela- održava normalno stanje pluća i bronhija- jača odbrambenu snagu organizma.'
					},
					{
						id: 8,
						name: 'Bronholah',
						desc: 'Gel',
						purpose:
							'predstavlja kombinaciju pažljivo odabranih etarskih ulja, koja putem inhalacije pomaže u smirivanju simptoma alergijskog rinitisa.',
						effects:
							'zahvaljujući svojim sledećim svojstvima: Etarsko ulje limuna , Etarsko ulje lavande, Etarsko ulje nane, Etarsko ulje eukaliptusa. Gel se u tankom sloju nanosi ispod nosa, na kožu slepoočnica i iza uha ili se rastrlja među dlanovima i udiše.'
					},
					{
						id: 9,
						name: 'Echianid',
						desc: 'Sprej za grlo',
						purpose:
							'Dodatak ishrani (dijetetski suplement) na bazi ekstrakta ehinacee purpuree sa prirodnom aromom mente.',
						effects:
							'Aplikuje se nerazblažen direktno na sluzokožu jezika i grla. Olakšava simptome kod prehlade i upale grla.Ne sadrži gluten, šećer, supstance životinjskog porekla i derivate mleka.',
						limits:
							'Ne sadrži alkohol. Pogodan za odrasle i decu stariju od 12 godina'
					},
					{
						id: 10,
						name: 'PropoMucil PHYSIO',
						desc: 'Fiziološki rastvor',
						image: 'propomucil.png',
						purpose:
							'rastvor sadrži propolis, N-acetilcistein, etarska ulja eukaliptusa i nane.',
						effects:
							'Poboljšava prohodnost nosa i ublažava tegobe gornjih disajnih puteva. Potrebno je naprskati u nosnu šupljinu više puta u toku dana, po potrebi.',
						limits:
							'PropoMucil Physio hypertonic se preporučuje odraslima i deci od 3. godine za svakodnevnu upotrebu.'
					},
					{
						id: 11,
						name: 'Pulmint',
						desc: 'Inhalator za nos',
						purpose:
							'Kod zapušenog nosa (prehlade, kijavice, alerije) za svakodnevnu higijenu nosne šupljine. Pulmint fresh, inhalator za nos, se koristi kod zapušenog nosa i otežanog disanja. Pulmint fresh u svom sastavu sadrži mentol i ulje eukaliptusa.',
						effects:
							'Mentol deluje kao moćan antiseptik, dok se ulje eukaliptusa bori sa bakterijama i virusima na nivou nosne šupljine i sprečava da ovi infektivni agensi prodru dublje u disajne puteve'
					},
					{
						id: 12,
						name: 'Rhinosinn',
						desc: 'Inhalator za nos',
						purpose:
							'Rhinosinn se koristi za ublažavanje zapušenosti nosa i curenja iz nosa, kao i za sprečavanje rinitisa i infekcija respiratornog trakta.',
						effects:
							'Sadrži etarska ulja i tinkture šest različitih biljaka čiji aktivni principi imaju dokazanu efikasnost kroz brojne studije, a njihovo delovanje se ispoljava kroz sledeće efekte koje postižu u sinergiji:  Smanjuju zapušenost nosa  Sprečavaju rast i razvoj patogena. Stimulišu regeneraciju sluzokože nosa.'
					},
					{
						id: 13,
						name: 'Hysan Baby',
						desc: 'Kapi za nos',
						purpose:
							'ima dvostruko dejstvo: formira dugotrajan i stabilan zaštitni film na sluzokoži i ima visok kapacitet vezivanja vode. Hysan baby je sterilan, izotonični rastvor koji ne sadrži konzervans ni potisni gas.',
						effects:
							'ima dvostruko dejstvo: formira dugotrajan i stabilan zaštitni film na sluzokoži i ima visok kapacitet vezivanja vode.',
						limits: 'Rastvor je sterilan 6 meseci nakon otvaranja.'
					},
					{
						id: 14,
						name: 'Marisol Isotonic 50ml',
						desc: 'Sprej za nos',
						purpose:
							'Namenjen je osobama kod kojih je poremećena normalna fiziološka funkcija nosne sluzokože, kao i održavanju svakodnevne higijene nosnih šupljina.',
						effects:
							'Marisol isotonic rastvor vraća sluzokoži nosa njenu prirodnu vlažnost, sposobnost samoprečišćavanja i normalne produkcije sluzi koja je štiti od isušivanja i mehaničkih nadražaja.'
					},
					{
						id: 15,
						name: 'Nisita®',
						desc: 'Mast za nos',
						purpose:
							'mast za nos se primenjuje kod suve sluznice nosa, kao dodatno lečenje kod zapušenog nosa, npr. kod obične prehlade, za čiščenje i vlaženje sluznice nosa, npr. suv vazduh u prostoriji, za lečenje krastica u nosu.',
						limits: 'Nisita mast za nos mogu koristiti odrasli, deca i odojčad.'
					},
					{
						id: 16,
						name: 'PROPOHERB G',
						desc: 'Sprej za grlo',
						purpose:
							'Sprej za grlo na bazi propolisa i lekovitog bilja pomaže kod upala i infekcija usne duplje i ždrela.',
						effects:
							'Ublažava prateće simptome oboljenja desni, kao što je paradentoza. Olakšava bol u grlu i pomaže kod suvog i nadražajnog kašlja.',
						limits:
							'Ne preporučuje se deci mlađoj od 6 godina. Preparat sadrži alkohol. Ne upotrebljavati duže od dve nedelje u kontinuitetu.'
					},
					{
						id: 17,
						name: 'Apis Gola',
						desc: 'Sprej za grlo',
						purpose:
							'sprej za grlo brzo i efikasno smanjuje crvenilo sluzokože grla, bol, grebanje otežano gutanje a ukoliko su prisutne Afte ubrzava njihovo zarastanje.',
						effects:
							'Takodje sprečava rast bakterija i gljivica u usnoj duplji.',
						limits:
							'Pre upotrebe promućkati !Za uzrast od 1-4 godine 3x dnevno.Za uzrast od 4-12 godina 4x dnevno.'
					},
					{
						id: 18,
						name: 'Phytovirin',
						desc: 'Pastile',
						purpose:
							'svojom specifičnom formulacijom oblažu usnu duplju i stvaraju prirodni zaštitni film koji blokira ulazak patogena, virusa i bakterija u organizam.',
						effects:
							'pastile štite organizam od virusa i bakterija, održavaju zdravlje bronhija i respiratornog trakta, podržavaju prirodnu odbranu organizma, pomažu u ublažavanju bola u grlu, doprinose smanjenju umora.',
						limits:
							'Odrasli: 1 pastila 6 puta dnevno, polako rastopiti u ustima. Deca starija od 12 godina : 1 pastila 2 puta dnevno, polako rastopiti u ustima.'
					},
					{
						id: 19,
						name: 'beli slez',
						desc: 'čaj',
						purpose:
							'Koristi se kao sredstvo za ublažavanje nadražaja na kašalj, za ispiranja kod zapaljenja sluznica gornjih delova organa za disanje, kod katara želudca i creva, a spolja kao oblog kod zapaljenja i opekotina na koži.'
					},
					{
						id: 20,
						name: 'Dr.Theiss žalfija i bokvica',
						desc: 'pastille',
						purpose:
							'Ublažavaju tegobe koje prate upalu sluznice usta i grla.Kod nadražaja gornjih disajnih puteva.',
						effects:
							'Ubrzavaju regeneraciju oštećene ili obolele sluzokože. Sperečavaju nastanak superinfekcija (kod afti, gingivostomatitisa).'
					},
					{
						id: 21,
						name: 'Herboral',
						desc: 'sirup',
						purpose:
							'kod kašlja praćenog prehladom i gripom,kod upale grla i hroničnog bronhitisa,u tretmanu prehlade i gripa. ',
						effects:
							'kod održavanja pravilne funkcije respiratornog traktaza, lakše iskašljavanje sekretakod iritacije grla praćene produktivnim kašljem',
						limits:
							'Odrasli i deca starija od 12 godina: 3 puta dnevno 15ml.Deca od 4 do 12 godina: 3 puta dnevno 5ml.Napomena: sirup se uzima posle jela.'
					},
					{
						id: 22,
						name: 'Mucoplant',
						desc: 'sirup za laku noc',
						purpose:
							'Dr. Theiss-ov Mucoplant  Good night sirup za laku noć sadrži mešavinu ekstrakta biljaka, pa pored uskolisne bokvice sadrži kamilicu, matičnjak i majčinu dušicu, biljke koje se tradicionalno koriste za ublažavanje nelagode u disajnim putevima.',
						effects:
							'Posebno se preporučuje osobama sa osetljivim disajnim putevima, kod kašlja praćenog obimnim stavarnjem sekreta jer može doprineti pravilnom funkcionisanju i umanjenju nadražaja na kašalj, bez ometanja prirodnog eliminisanja sekreta, što doprinosi kvalitetnom odmoru tokom noći.'
					},
					{
						id: 23,
						name: 'Bronhoklir',
						desc: 'sirup',
						purpose:
							'sirup bršljan sadrži ekstrat lista bršljana koji razređuje sluz koja se nakuplja u disajnim putevima smanjuje neprijatne nadražaje grla i pomaže opuštanju glatkih mišićnih struktura u disajnim putevima i takoolakšava proces iskašljavanja.',
						limits:
							'Predstavlja pomoć kod suvog i produktivnog kašlja. Ne sadrži šećer i mogu ga koristiti i dijabetičari'
					},
					{
						id: 24,
						name: 'Beba C',
						desc: 'sirup',
						purpose:
							'beli slez sa vitaminom C je dijetetski proizvod namenjen za održavanje zdravlja respiratornih organa.',
						effects:
							'Beli slez ima umirujuće i prijatno dejstvo na grlo, ždrelo i glasne žice. Pruža olakšanje u slučaju nadražaja/iritacije grla, ždrela i glasnih žica.Tradicionalno, beli slez se koristi u tretmanu suvog i nadražajnog kašlja.'
					}
				]
			},
			zubi: {
				id: 3,
				name: 'Zubi',
				desc: 'Zubobolja',
				image: 'toothache.png',
				products: [
					{
						id: 1,
						name: 'Aloe Fresh',
						desc: 'Sprej za osvežavanje daha',
						purpose:
							'sprečava razvoj bakterija u usnoj duplji zahvaljujući jedinstvenom sastavu.',
						effects:
							'Sadrži aloju, eterično ulje ulja čajevca, ekstrakt semena grejpfrutai kitosan deluje antiseptik i ima antiinflamatorno dejstvo i može preporučiti i za ublažavanje tegoba kod pojave čireva u ustima, upale desni i bolova u grlu.'
					},
					{
						id: 2,
						name: 'Dologel',
						desc: 'Gel za desni',
						purpose:
							'Njegov sastav čini isključivo kombinacija prirodnih sastojaka: dok valerijana ublažava bol, sadržaj kamilice i propolisa smiruje upalu i dezinfikuje desni.Dologel, za razliku od sličnih proizvoda, ne sadrži lidokain niti bilo koji drugi sintetički anestetik kako ne bi opteretio maleni dečiji organizam.',
						effects:
							'Zahvaljujući prirodnim sastojcima, nežan je za stomak i može se koristiti u neograničenim količinama.'
					},
					{
						id: 3,
						name: 'Mediflora',
						desc: 'biljne kapi',
						purpose:
							', Preporučuju se za prevenciju i pomoćnu terapiju kod bolesti desni (gingivitis, paradontopatija).',
						effects:
							'Tinktura se upotrebljava spolja - za masažu desni.Preparat sadrži alkohol (etanol).',
						limits:
							'Način čuvanja: Na sobnoj temperaturi i tamnom mestu, izvan domašaja dece.'
					},
					{
						id: 4,
						name: 'Herbal',
						desc: 'Gel',
						purpose:
							'gel sa hijaluronskom kiselinom protiv zubobolje i za negu desni sadrži ekstrakt kamilice, etarska ulja nane i karanfilića, i hijaluronsku kiselinu.',
						effects:
							'Gel je formulisan tako da na veoma brz i efikasan način ukloni zubobolju, bez obzira na uzrok njene pojave (zubobolja kao posledica karijesa ili oboljenja desni, zubobolja nastala usled izbijanja ili povrede zuba, bol u zubima kao reakcija na različite termičke, hemijske i mehaničke nadražaje).'
					},
					{
						id: 5,
						name: 'Tinctura Paradentoica',
						desc: 'Kapi za jačanje desni ',
						purpose:
							'Kapi za jačanje desni predstavljaju kombinaciju tinktura u čijem sastavu dominiraju tanini, flavonoidi i etarska ulja. Preparat se preporučuje za prevenciju i pomoćnu terapiju kod bolesti desni (gingivitis, paradontopatija).',
						effects:
							'Zahvaljujući svom kompleksnom sastavu preparat ispoljava adstrigentno, antiseptično, antiinflamatorno, blago anestetično i hemostatično dejstvo.'
					},
					{
						id: 6,
						name: 'Gingival',
						desc: 'Gel za masažu desni',
						purpose:
							'kao pomoćno sredstvo za održavanje i podržavanje rezultata koje je postigao stomatolog, sprovodeći standarnu terapiju kod pacijenata sa izraženim znacima zapaljenja desni, nastalih zbog gingivitisa, paradontopatije, naslaga kamenca i drugih uzročnika.',
						effects:
							'Pre svakog nanošenja Gingival gela, zube treba dobro oprati četkicom i pastom za zube. Istisnuti oko 0,5 cm gela na jagodicu prsta i blagim kružnim pokretima nanositi na i okolo desni sa spoljašnje strane, lagano ih masirati; isto ponoviti sa unutrašnje strane desni.Nakon nanošenja gela jedan sat ne uzimati hranu ni tečnost kako bi gel ostvario dejstvo.',
						limits:
							'GINGIVAL gel se koristi dva do tri puta dnevno, najkraće 7 dana.'
					},
					{
						id: 7,
						name: 'Dentinol',
						desc: 'Kapi',
						purpose:
							'služe prvenstveno za kratkotrajno i privremeno smirivanje upale i bolova zuba, desni i sluzokože usne duplje, a ne za njihovo lečenje.',
						effects:
							'Poseduju antiseptičko, baktericidno, adstrigentno, anestetičko i antiflogističko dejstvo.'
					},
					{
						id: 8,
						name: 'Ozosept',
						desc: 'koncentrovani rastvor',
						purpose:
							'redovnu higijenu usne duplje i održavanje zdravlja desni,ublažavanje tegoba kod oboljenja desni, grla i ždrela,tretman zapaljenja desni (gingivitis, parodontopatija), usne duplje (stomatitis, afte), krajnika (tonzilitis), grla (faringitis) neutralizaciju neprijatnog zadaha,osobe koje nose protetičke nadoknade i posle stomatoloških intervencija.',
						effects:
							': Razblaženim rastvorom ispirati usnu duplju ili grlo tri puta dnevno.'
					}
				]
			}
		}
	},
	ruka: {
		id: 2,
		name: 'Ruka',
		desc: 'Ruka',
		image: 'hand.png',
		parts: {
			rame: {
				id: 1,
				name: 'Ramena'
			},
			lakat: {
				id: 2,
				name: 'Nadlaktica'
			},
			zglob: {
				id: 3,
				name: 'Zglob',
				desc: 'Ručni Zglob',
				image: 'wrist.png',
				products: [
					{
						id: 1,
						name: 'Arthronal',
						desc: 'Kapsule',
						image: 'arthronal.png',
						purpose:
							'Arthronal je izbalansirana kombinacija 11 aktivnih sastojaka za regeneraciju hrskavice i bolju pokretljivost zglobova.Povoljno utiče na bol i ograničenu pokretljivost kod pacijenata sa osteartrozom kolena, kuka, malih zglobova šake ručja, odnosno kod osteoartroze na nivou kičmenog stub. Pomaže u oporavku nakon povreda ligamenata i ostalih glavnih ili sporednih elemenata zglobova.',
						effects:
							'Potpomaže normalno stvaranja kolagena, vezivnog tkiva i normalnu koštanu funkciju.Poboljšava fukcionalni kapacitet zglobova.Potpomaže zdrav inflamatorni odgovor.'
					},
					{
						id: 2,
						name: 'Cartinorm',
						desc: 'Prašak za oralni rastvor',
						image: 'cartinorm.png',
						purpose:
							'Dodatak ishrani sa zaslađivačima sa ukusom pomorandže, limuna i ananasa.Cartinorm +  BIOcollagen se preporučuje kod: očuvanja zdrave hraskavice i ublažavanje simptoma već nastale artroze (zahvaljujući visokim dozama glukozamin-sulfatai hondroitin-sulfata), za regeneraciju hrskavice uz pomoć Fortigel bioaktivnog peptida kolagena kod osteoartritisa, kod sportista za održavanje zdravlja zglobova i povećanje fizičkih performansi.',
						effects:
							'Glukozamin je gradivna komponenta hrskavice. Ima povoljne efekte na očuvanje i održavanje optimalne funkcije hrskavice i zglobova i to normalizujući funkciju hondrocita (ćelija hrskavice).Hondroitin-sulfat je glavna komponenta hrskavice, konstruktivni sastojak proteoglikana koji obezbeđuje mehanička i elastična svojstva hrskavice. Deficit hondroitin-sulfata u hrskavici je povezan sa pojavom osteoartritisa.'
					},
					{
						id: 3,
						name: 'Flexaktiv 9',
						desc: 'Tablete',
						image: 'flexaktiv9.png',
						purpose:
							'Flexaktiv je dijetetski suplement namenjen za zglobove i kosti.Flexaktiv 9 tablete namenjene su za preventivnu zaštitu zglobova, kod intenzivnih fizičkih aktivnosti,kod upalnih procesa vezivnog tkiva, kao dopunska terapija kod degenerativnih i zapaljenskih promena na zglobovima (osteoarthritis, reumatoidni artritis, juvenilni artritis, giht).Preporučuju se starijim ljudima, sportistima i rekreativcima.',
						effects:
							'Glukozamin je osnovni gradivni materijal zglobnih struktura. Indijski tamjan doprinosi održavanju normalne pokretljivosti zglobova.Rizoma kurkume smanjuje otečenost zglobova, ima protivupalno dejstvo.Rizoma đumbira smanjuje bol kod osoba sa osteoartritisom.Vitamin C doprinosi normalnom stvaranju kolagena za normalnu funkciju kostiju i hrskavice te doprinosi zaštiti ćelija od oksidativnog stresa.Mangan doprinosi normalnom stvaranju vezivnog tkiva, doprinosi zaštiti ćelija od oksidativnog stresa te doprinosi održavanju normalnih kostiju.Selen doprinosi zaštiti ćelija od oksidativnog stresa.'
					},
					{
						id: 4,
						name: 'No-Dol max',
						desc: 'Tablete',
						purpose:
							'preporučuju se kod hroničnih reumatskih tegoba, kao i kod sportskih povreda.',
						effects:
							': Dijetetski dodatak ishrani sa manganom, glukozaminom, kondroitinom, MSM kompleksom i biljnim ekstraktima aloje i đavolje kandže, koji povoljno utiče na pokretljivost zglobova. Olakšava tegobe izazvane hroničnim upalama zglobova, smanjuje bolove i oticanje, pospešuje pokretljivost zglobova i ubrzava oporavak nakon povreda i preloma.'
					},
					{
						id: 5,
						name: 'K2D3',
						desc: 'Tablete',
						image: 'k2d3.png',
						purpose:
							'sadrži najoptimalniju kombinaciju dva esencijalna vitamina koji sinergistički deluju na jačanje kostiju. Preporučuje se uz kalcijum osobama koje boluju od osteoporoze',
						effects:
							'poboljšava apsorpciju i upotrebljivost kalcijuma,usmerava kalcijum u kosti,podstiče izgradnju i regeneraciju kostiju,poboljšava mineralizaciju kostiju,povećava gustinu kostiju.K2D3 usmerava kalcijum u kosti umesto u krvne sudove što je istovremeno bitno i za zdravlje kostiju i za kardiovaskularno zdravlje.'
					},
					{
						id: 6,
						name: 'Hyalfit',
						desc: 'Kapsule',
						image: 'hyalfitkapsule.png',
						purpose:
							'Preporučuje se primena Hyalfit kapsula kod: osteoartritisa, degenerativne bolesti zglobova, artritisa kolena, lakta, ramena, kuka, šake i stopala, reumatoiodnog artritisa, povreda zglobova, bolova pri kretanju, u stanju mirovanja i ukočenosti zglobova.',
						effects:
							'Kolagen utiče na ćelije hrskavice i kostiju tako što stimuliše povećanje proizvodnje dodatnog, novog kolagena i sprečava razgradnju već postojeće strukture hrskavice. Time se poboljšava pokretljivost zglobova .Boswellia ublažava proces upala, pozitivno deluje kod ublažavanja simptoma osteoartritisa, pomaže kod bolova u zgobovima, jutarnje ukočenosti i poboljšava pokretljivost zglobova. Hondroitin sulfat je važna strukturna komponeneta hrskavice i pomaže kod otpornosti na pritisak u zglobu. Hijaluronska kiselina ima esencijalnu ulogu u održavanju normalne funkcije zglobova'
					},
					{
						id: 7,
						name: 'Vitalis Sports Cream',
						desc: 'Krem',
						image: 'sportscream.png',
						purpose:
							'Sports cream je biljni antireumatik, efikasan kod reume, artritisa, sportskih povreda, bolova u leđima, ukočenog vrata, tegoba kod poslovnih ljudi. Zaustavlja reumatske i sportske bolove.',
						effects:
							'Trenutno ublažava bol.Eukaliptus, nana, ruzmarin i aloe vera će vratiti mladost Vašim zglobovima.Sports cream ne samo da ublažava bol nego i jača hrskavicu i poboljšava cirkulaciju u samom zglobu.'
					},
					{
						id: 8,
						name: 'Artox Gel',
						desc: 'Gel',
						image: 'artoxgel.png',
						purpose:
							'Zahvaljujući osmotskom dejstvu i njegovim isparljivim komponentama, ovaj proizvod je koristan za oslobađanje od bolova u mišićima ili zglobovima.',
						effects:
							'Aktivni sastojci Artox gela ostvaruju i antizapaljenska, antiedematozna i analgetska svojstva delujući povoljno na smanjenje bola, otoka i upale.'
					},
					{
						id: 9,
						name: 'Hyalfit',
						desc: 'Gel',
						image: 'hyalfitgel.png',
						purpose:
							'Hyalfit gel je preparat namenjen za masažu sa umirujućim dejstvom na mišiće, ligamente i zglobove sa efektom hlađenja.Kreiran je za brzo i dugotrajno olakšanje i uklanjanje bol.',
						effects:
							'Mentol u kombinaciji sa alkoholom prokrvljuje, hladi i pomaže da se bolje apsorbuju aktivne supstance.Preparat sadrži uravnoteženu kombinaciju tri vrste biljaka (indijski tamjan - Boswellia serrata, gavez- Symphytum officinale, divlji kesten- Aesculus hyppocastanum) sa blagotvornim dejstvom na celokupni koštano-mišićni sistem.Hyalfit gel je dodatno obogaćen hijaluronskom kiselinom, koja je sastavni deo sinovijalne tečnosti zglobova.'
					},
					{
						id: 10,
						name: 'Cetilar',
						desc: 'Krem',
						image: 'cetilar.png',
						purpose:
							'Cetilar krem je nova formula brzog dejstva za lokalnu upotrebu kod traumatičnih i artritičnih bolova u zglobovima, mišićima i tetivama.',

						effects:
							'koja poboljšava funkciju zglobova, povećava obim pokreta i ublažava bol.Zbog svojih odličnih svojstava hlađenja i podmazivanja, proizvod je pogodan za sportsku i terapijsku masažu, a koristi se i kao pomoć kod bolova u zglobovima, tetivama i mišićno-skeletnom sistemu.'
					},
					{
						id: 11,
						name: 'NEM',
						desc: 'Kapsule',
						image: 'nem.png',
						purpose:
							'sadrže membranu ljuske jajeta u prahu koja je prirodan izvor proteina, prirodnog glukozamina, prirodnog hondroitin sulfata, prirodne hijaluronske kiseline i prirodnog kolagena tipa I.',
						effects:
							'Membrana ljuske jajeta sadrži identične komponente kao i ljudski zglobovi, tako da predstavlja koristan izvor hranljivih supstanci neophodnih za stalno obnavljanje hrskavice i vezivnog tkiva, održavanje punog kvaliteta zdravlja zglobne hrskavice i okolnih struktura.'
					},
					{
						id: 12,
						name: 'Biofreeze',
						desc: 'Gel',
						image: 'biofreeze.png',
						purpose:
							'Biljni ekstrakti Biofreeze gela predstavljaju analgetičku komponentu koja blagotvorno deluje na povređeno i oštećeno tkivo, u smislu lokalnog analgetičkog efekta. Bol uklanja brzo i efikasno. Prodire duboko i obezbeđuje produženo dejstvo.',
						effects:
							':Brzo i efikasno uklanja sve vrste bolova i grčeva uz prijatan osećaj hlađenja, podstiče cirkulaciju i olakšava tegobe nastale kao posledica proširenih vena: bol ,otok, napetost, trnjenje, grčeve, pucanje kapilara, osećaj “teških nogu”, pomaže kod sportskih povreda, istegnuća i uganuća, otklanja glavobolju, smanjuje bolove u vratu i leđima. Zbog svoje teksture analgetskog dejstva i osvežavajućeg mirisa mentola pogodan je za masažu.'
					}
				]
			},
			šaka: {
				id: 4,
				name: 'Šaka'
			}
		}
	},
	torzo: {
		id: 3,
		name: 'Torzo'
	},
	noge: {
		id: 4,
		name: 'Noge',
		desc: 'Noge',
		image: 'legs.png',
		parts: {
			butine: {
				id: 1,
				name: 'Butine',
				desc: 'Butine',
				image: '',
				products: []
			},
			kolena: {
				id: 2,
				name: 'Kolena',
				desc: 'Kolena',
				image: '',
				products: []
			},
			zglob: {
				id: 4,
				name: 'Skočni Zglob',
				desc: 'Zglob',
				image: 'ankle.png',
				products: [
					{
						id: 1,
						name: 'Arthronal',
						desc: 'Kapsule',
						image: 'arthronal.png',
						purpose:
							'Arthronal je izbalansirana kombinacija 11 aktivnih sastojaka za regeneraciju hrskavice i bolju pokretljivost zglobova.Povoljno utiče na bol i ograničenu pokretljivost kod pacijenata sa osteartrozom kolena, kuka, malih zglobova šake ručja, odnosno kod osteoartroze na nivou kičmenog stub. Pomaže u oporavku nakon povreda ligamenata i ostalih glavnih ili sporednih elemenata zglobova.',
						effects:
							'Potpomaže normalno stvaranja kolagena, vezivnog tkiva i normalnu koštanu funkciju.Poboljšava fukcionalni kapacitet zglobova.Potpomaže zdrav inflamatorni odgovor.'
					},
					{
						id: 2,
						name: 'Cartinorm',
						desc: 'Prašak za oralni rastvor',
						image: 'cartinorm.png',
						purpose:
							'Dodatak ishrani sa zaslađivačima sa ukusom pomorandže, limuna i ananasa.Cartinorm +  BIOcollagen se preporučuje kod: očuvanja zdrave hraskavice i ublažavanje simptoma već nastale artroze (zahvaljujući visokim dozama glukozamin-sulfatai hondroitin-sulfata), za regeneraciju hrskavice uz pomoć Fortigel bioaktivnog peptida kolagena kod osteoartritisa, kod sportista za održavanje zdravlja zglobova i povećanje fizičkih performansi.',
						effects:
							'Glukozamin je gradivna komponenta hrskavice. Ima povoljne efekte na očuvanje i održavanje optimalne funkcije hrskavice i zglobova i to normalizujući funkciju hondrocita (ćelija hrskavice).Hondroitin-sulfat je glavna komponenta hrskavice, konstruktivni sastojak proteoglikana koji obezbeđuje mehanička i elastična svojstva hrskavice. Deficit hondroitin-sulfata u hrskavici je povezan sa pojavom osteoartritisa.'
					},
					{
						id: 3,
						name: 'Flexaktiv 9',
						desc: 'Tablete',
						image: 'flexaktiv9.png',
						purpose:
							'Flexaktiv je dijetetski suplement namenjen za zglobove i kosti.Flexaktiv 9 tablete namenjene su za preventivnu zaštitu zglobova, kod intenzivnih fizičkih aktivnosti,kod upalnih procesa vezivnog tkiva, kao dopunska terapija kod degenerativnih i zapaljenskih promena na zglobovima (osteoarthritis, reumatoidni artritis, juvenilni artritis, giht).Preporučuju se starijim ljudima, sportistima i rekreativcima.',
						effects:
							'Glukozamin je osnovni gradivni materijal zglobnih struktura. Indijski tamjan doprinosi održavanju normalne pokretljivosti zglobova.Rizoma kurkume smanjuje otečenost zglobova, ima protivupalno dejstvo.Rizoma đumbira smanjuje bol kod osoba sa osteoartritisom.Vitamin C doprinosi normalnom stvaranju kolagena za normalnu funkciju kostiju i hrskavice te doprinosi zaštiti ćelija od oksidativnog stresa.Mangan doprinosi normalnom stvaranju vezivnog tkiva, doprinosi zaštiti ćelija od oksidativnog stresa te doprinosi održavanju normalnih kostiju.Selen doprinosi zaštiti ćelija od oksidativnog stresa.'
					},
					{
						id: 4,
						name: 'No-Dol max',
						desc: 'Tablete',
						purpose:
							'preporučuju se kod hroničnih reumatskih tegoba, kao i kod sportskih povreda.',
						effects:
							': Dijetetski dodatak ishrani sa manganom, glukozaminom, kondroitinom, MSM kompleksom i biljnim ekstraktima aloje i đavolje kandže, koji povoljno utiče na pokretljivost zglobova. Olakšava tegobe izazvane hroničnim upalama zglobova, smanjuje bolove i oticanje, pospešuje pokretljivost zglobova i ubrzava oporavak nakon povreda i preloma.'
					},
					{
						id: 5,
						name: 'K2D3',
						desc: 'Tablete',
						image: 'k2d3.png',
						purpose:
							'sadrži najoptimalniju kombinaciju dva esencijalna vitamina koji sinergistički deluju na jačanje kostiju. Preporučuje se uz kalcijum osobama koje boluju od osteoporoze',
						effects:
							'poboljšava apsorpciju i upotrebljivost kalcijuma,usmerava kalcijum u kosti,podstiče izgradnju i regeneraciju kostiju,poboljšava mineralizaciju kostiju,povećava gustinu kostiju.K2D3 usmerava kalcijum u kosti umesto u krvne sudove što je istovremeno bitno i za zdravlje kostiju i za kardiovaskularno zdravlje.'
					},
					{
						id: 6,
						name: 'Hyalfit',
						desc: 'Kapsule',
						image: 'hyalfitkapsule.png',
						purpose:
							'Preporučuje se primena Hyalfit kapsula kod: osteoartritisa, degenerativne bolesti zglobova, artritisa kolena, lakta, ramena, kuka, šake i stopala, reumatoiodnog artritisa, povreda zglobova, bolova pri kretanju, u stanju mirovanja i ukočenosti zglobova.',
						effects:
							'Kolagen utiče na ćelije hrskavice i kostiju tako što stimuliše povećanje proizvodnje dodatnog, novog kolagena i sprečava razgradnju već postojeće strukture hrskavice. Time se poboljšava pokretljivost zglobova .Boswellia ublažava proces upala, pozitivno deluje kod ublažavanja simptoma osteoartritisa, pomaže kod bolova u zgobovima, jutarnje ukočenosti i poboljšava pokretljivost zglobova. Hondroitin sulfat je važna strukturna komponeneta hrskavice i pomaže kod otpornosti na pritisak u zglobu. Hijaluronska kiselina ima esencijalnu ulogu u održavanju normalne funkcije zglobova'
					},
					{
						id: 7,
						name: 'Vitalis Sports Cream',
						desc: 'Krem',
						image: 'sportscream.png',
						purpose:
							'Sports cream je biljni antireumatik, efikasan kod reume, artritisa, sportskih povreda, bolova u leđima, ukočenog vrata, tegoba kod poslovnih ljudi. Zaustavlja reumatske i sportske bolove.',
						effects:
							'Trenutno ublažava bol.Eukaliptus, nana, ruzmarin i aloe vera će vratiti mladost Vašim zglobovima.Sports cream ne samo da ublažava bol nego i jača hrskavicu i poboljšava cirkulaciju u samom zglobu.'
					},
					{
						id: 8,
						name: 'Artox Gel',
						desc: 'Gel',
						image: 'artoxgel.png',
						purpose:
							'Zahvaljujući osmotskom dejstvu i njegovim isparljivim komponentama, ovaj proizvod je koristan za oslobađanje od bolova u mišićima ili zglobovima.',
						effects:
							'Aktivni sastojci Artox gela ostvaruju i antizapaljenska, antiedematozna i analgetska svojstva delujući povoljno na smanjenje bola, otoka i upale.'
					},
					{
						id: 9,
						name: 'Hyalfit',
						desc: 'Gel',
						image: 'hyalfitgel.png',
						purpose:
							'Hyalfit gel je preparat namenjen za masažu sa umirujućim dejstvom na mišiće, ligamente i zglobove sa efektom hlađenja.Kreiran je za brzo i dugotrajno olakšanje i uklanjanje bol.',
						effects:
							'Mentol u kombinaciji sa alkoholom prokrvljuje, hladi i pomaže da se bolje apsorbuju aktivne supstance.Preparat sadrži uravnoteženu kombinaciju tri vrste biljaka (indijski tamjan - Boswellia serrata, gavez- Symphytum officinale, divlji kesten- Aesculus hyppocastanum) sa blagotvornim dejstvom na celokupni koštano-mišićni sistem.Hyalfit gel je dodatno obogaćen hijaluronskom kiselinom, koja je sastavni deo sinovijalne tečnosti zglobova.'
					},
					{
						id: 10,
						name: 'Cetilar',
						desc: 'Krem',
						image: 'cetilar.png',
						purpose:
							'Cetilar krem je nova formula brzog dejstva za lokalnu upotrebu kod traumatičnih i artritičnih bolova u zglobovima, mišićima i tetivama.',

						effects:
							'koja poboljšava funkciju zglobova, povećava obim pokreta i ublažava bol.Zbog svojih odličnih svojstava hlađenja i podmazivanja, proizvod je pogodan za sportsku i terapijsku masažu, a koristi se i kao pomoć kod bolova u zglobovima, tetivama i mišićno-skeletnom sistemu.'
					},
					{
						id: 11,
						name: 'NEM',
						desc: 'Kapsule',
						image: 'nem.png',
						purpose:
							'sadrže membranu ljuske jajeta u prahu koja je prirodan izvor proteina, prirodnog glukozamina, prirodnog hondroitin sulfata, prirodne hijaluronske kiseline i prirodnog kolagena tipa I.',
						effects:
							'Membrana ljuske jajeta sadrži identične komponente kao i ljudski zglobovi, tako da predstavlja koristan izvor hranljivih supstanci neophodnih za stalno obnavljanje hrskavice i vezivnog tkiva, održavanje punog kvaliteta zdravlja zglobne hrskavice i okolnih struktura.'
					},
					{
						id: 12,
						name: 'Biofreeze',
						desc: 'Gel',
						image: 'biofreeze.png',
						purpose:
							'Biljni ekstrakti Biofreeze gela predstavljaju analgetičku komponentu koja blagotvorno deluje na povređeno i oštećeno tkivo, u smislu lokalnog analgetičkog efekta. Bol uklanja brzo i efikasno. Prodire duboko i obezbeđuje produženo dejstvo.',
						effects:
							':Brzo i efikasno uklanja sve vrste bolova i grčeva uz prijatan osećaj hlađenja, podstiče cirkulaciju i olakšava tegobe nastale kao posledica proširenih vena: bol ,otok, napetost, trnjenje, grčeve, pucanje kapilara, osećaj “teških nogu”, pomaže kod sportskih povreda, istegnuća i uganuća, otklanja glavobolju, smanjuje bolove u vratu i leđima. Zbog svoje teksture analgetskog dejstva i osvežavajućeg mirisa mentola pogodan je za masažu.'
					}
				]
			}
		}
	},
	ledja: {
		id: 5,
		name: 'Leđa'
	}
}

export default body
