/* ─────────────────────────────────────────────────────────────
   Nobu-Ya menu data + admin config
   ─────────────────────────────────────────────────────────────
   This file is the source of truth for the menu STRUCTURE
   (which dishes exist, what section they belong to, default
   prices/names/descriptions, and which photo to show).

   Day-to-day edits — toggling items off, changing a price, or
   tweaking a description for the day — are done through
   admin.html. Those edits are stored as "overrides" on top of
   this file. Reset-to-defaults in admin restores what's here.
   ───────────────────────────────────────────────────────────── */

window.MENU = {
  // ── Restaurant info (shown on the cover) ───────────────────
  restaurant: {
    name: 'Nobu-Ya',
    accentChar: '-',
    jpName: '信屋',
    tagline: 'A genuine Izakaya experience. Guests must be 18 and above.',
    edition: 'Menu',
    hours: [
      'Mon – Sat : 6:00 PM – 10:30 PM (last order 9:45 PM)',
      'Sun & PH : 5:30 PM – 10:00 PM (last order 9:15 PM)',
    ],
    locations: [
      'NOBU-YA (#01-05) — Reserved for groups where ALL are drinking alcohol',
      'Nob’s Kitchen (#01-33) — For groups with non-drinkers',
    ],
    footerNote: '*prices are subject to 10% service charge and prevailing GST',
  },

  // ── Admin / cloud sync config ──────────────────────────────
  admin: {
    // CHANGE THIS BEFORE GOING LIVE.
    password: '12345678',

    // Optional: shared cloud sync so admin changes show on customer phones.
    // Sign up free at https://jsonbin.io, create a private bin (content {}),
    // then paste its Bin ID and your X-Master-Key here.
    // If left blank, admin changes only apply on the admin's own device.
    cloud: {
      provider: 'jsonbin',          // 'jsonbin'  or  ''
      jsonbinId: '69f09f1a36566621a8ff40af',         // e.g. '659c1d7a266cfc3fde8b1234'
      jsonbinKey: '$2a$10$ElK4qEGhl371YgofO1PcROxa0ZonQwGDP6gjwxuCtELyYxtV6lZs.',        // X-Master-Key from your JSONBin account
    },
  },

  // ── Menu sections ──────────────────────────────────────────
  // kind: 'dish'  → 2-up grid with photos
  //       'drink' → text list, grouped by item.category
  //       'sake'  → text list with multi-size pricing (item.prices array)
  // Every item needs a stable `id` (used by admin to track edits + toggles).
  // image: path relative to this folder, e.g. 'Pictures/Beef Steak 1.png'
  sections: [
    {
      id: 'sashimi',
      number: '01',
      name: 'Sashimi',
      subtitle: '刺身',
      kind: 'dish',
      items: [
        { id: 'sashimi-mori',     en: 'Sashimi Mori',     jp: '刺身4種盛り', desc: '4 Type Sashimi (Hotate, Tuna, Salmon, Hamachi)', price: '42', image: 'Pictures/Sashimi Mori 1.png' },
        { id: 'hamachi-sashimi',  en: 'Hamachi Sashimi',  jp: 'はまち刺身',     desc: 'Yellowtail Sashimi (5 Slices)',                  price: '15', image: 'Pictures/Hamachi Sashimi 1.png' },
        { id: 'salmon-sashimi',   en: 'Salmon Sashimi',   jp: 'サーモン刺身', desc: 'Salmon Sashimi (5 Slices)',                      price: '15', image: 'Pictures/Salmon Sashimi 1.png' },
        { id: 'maguro-nattou',    en: 'Maguro Nattou',    jp: 'まぐろ納豆',     desc: 'Square Cut Tuna Sashimi with Fermented Beans',   price: '15', image: 'Pictures/Maguro Nattou 1.png' },
        { id: 'butsu',            en: 'Butsu',            jp: '鮪ぶつ',           desc: 'Square Cut Tuna Sashimi',                        price: '11', image: 'Pictures/Butsu 2.png' },
        { id: 'yamakake',         en: 'Yamakake',         jp: 'まぐろ山かけ', desc: 'Square Cut Tuna Sashimi with Grated Taro',       price: '13', image: 'Pictures/Yamakake.png' },
      ],
    },
    {
      id: 'chinmi',
      number: '02',
      name: 'Chinmi',
      subtitle: '珍味',
      kind: 'dish',
      items: [
        { id: 'tako-wasa',     en: 'Tako Wasa',     jp: 'タコわさび',         desc: 'Wasabi Marinated Octopus',               price: '7', image: 'Pictures/Tako Wasa 1.png' },
        { id: 'shiokara',      en: 'Shiokara',      jp: 'いか塩辛',               desc: 'Salted Squid and Squid Guts',            price: '6', image: 'Pictures/Shiokara 1.png' },
        { id: 'ume-kurage',    en: 'Ume Kurage',    jp: '梅くらげ',               desc: 'Plum Flavoured Jelly Fish',              price: '6', image: 'Pictures/Ume Kurage 1.png' },
        { id: 'asazuke',       en: 'Asazuke',       jp: 'きゅうりの浅漬',     desc: 'Pickled Cucumber',                       price: '6', image: 'Pictures/Asazuke 1.png' },
        { id: 'yatcco',        en: 'Yatcco',        jp: '冷奴',                       desc: 'Chilled Tofu',                           price: '6', image: 'Pictures/Yatco 1.png' },
        { id: 'ita-wasa',      en: 'Ita-Wasa',      jp: '板わさ',                   desc: 'Sliced KAMABOKO Fish Cake with Wasabi',  price: '6', image: 'Pictures/Ita Wasa 1.png' },
        { id: 'sausage',       en: 'Sausage',       jp: 'ソーセージ',             desc: 'Boiled Pork Sausage (5 Pieces)',         price: '8', image: 'Pictures/Sausage 1.png' },
        { id: 'iburi-gakko',   en: 'Iburi Gakko',   jp: 'いぶりがっこ',         desc: 'Smoked Pickled Daikon',                  price: '6', image: 'Pictures/Iburi Gakko 1.png' },
        { id: 'warabi-mochi',  en: 'Warabi Mochi',  jp: 'わらびゼリー',         desc: 'Home-made Warabi Mochi (4 Pieces)',      price: '7', image: 'Pictures/Warabi Mochi 1.png' },
      ],
    },
    {
      id: 'favourites',
      number: '03',
      name: 'Favourites',
      subtitle: 'おすすめ',
      kind: 'dish',
      items: [
        { id: 'oden-mori',      en: 'Oden Mori',     jp: '自家製おでん盛り',                                desc: 'ODEN Stew (*Additional Soup chargeable)',                              price: '15',     image: 'Pictures/Oden 1.png' },
        { id: 'asari-butter',   en: 'Asari Butter',  jp: 'あさりバター',                                          desc: 'Sautéed Asari Clam with Butter',                                       price: '12',     image: 'Pictures/Butter Asari 1.png' },
        { id: 'asari-mushi',    en: 'Asari Mushi',   jp: 'あさり酒蒸し',                                          desc: 'Sake Steamed Asari Clam',                                              price: '12',     image: 'Pictures/Asari Mushi 1.png' },
        { id: 'beef-steak',     en: 'Beef Steak',    jp: 'オーストラリア黒毛牛テンダーロインステーキ', desc: 'Australia Black Angus Tenderloin Beef Steak (120g)',                   price: '35',     image: 'Pictures/Beef Steak 1.png' },
        { id: 'buta-kimuchi',   en: 'Buta Kimuchi',  jp: '豚キムチ炒め',                                          desc: 'Sautéed Pork and Kimuchi',                                             price: '16',     image: 'Pictures/Buta Kimuchi 1.png' },
        { id: 'yaki-soba',      en: 'Yaki Soba',     jp: '焼きそば',                                                desc: 'Stir Fried Noodles with Pork (Small / Medium)',                        price: '18 / 45', image: 'Pictures/Yaki Soba 1.png' },
        { id: 'nira-moyashi',   en: 'Nira Moyashi',  jp: 'にらもやし炒め',                                       desc: 'Sautéed Beansprout and Chives',                                        price: '9',      image: 'Pictures/Niramoyashi 1.png' },
        { id: 'edamame',        en: 'Edamame',       jp: '枝豆',                                                      desc: 'Soybeans in the pod',                                                  price: '6',      image: 'Pictures/Edamame.png' },
        { id: 'avocado-salad',  en: 'Avocado Salad', jp: 'アボガドとトマトのサラダ',                       desc: 'Avocado Salad with Dressing',                                          price: '10',     image: 'Pictures/Avo salad 1.png' },
      ],
    },
    {
      id: 'fried',
      number: '04',
      name: 'Fried',
      subtitle: '揚げ物',
      kind: 'dish',
      items: [
        { id: 'tori-kara',      en: 'Tori Kara',      jp: '鶏から揚げ',     desc: 'Fried Chicken (10 Pieces)',                       price: '12', image: 'Pictures/Torikara 1.png' },
        { id: 'aji-fry',        en: 'Aji Fry',        jp: '鯵フライ',           desc: 'Deep-Fried Horse Mackerel (2 Pieces)',            price: '10', image: 'Pictures/Aji Fry 1.png' },
        { id: 'tako-age',       en: 'Tako Age',       jp: 'タコの唐揚げ', desc: 'Deep-Fried Octopus (8 Pieces)',                   price: '10', image: 'Pictures/Tako Age 1.png' },
        { id: 'kaki-fry',       en: 'Kaki Fry',       jp: '牡蠣フライ',     desc: 'Deep-Fried Oyster (5 Pieces)',                    price: '10', image: 'Pictures/Kaki Fry.png' },
        { id: 'kani-croquette', en: 'Kani Croquette', jp: 'カニクリームコロッケ', desc: 'Crab Cream Croquette',                price: '9',  image: 'Pictures/Kani Croquette 1.png' },
        { id: 'lobster-maki',   en: 'Lobster Maki',   jp: 'ロブスター巻き', desc: 'Lobster Salad with Tempura Maki (2 Pieces)',     price: '7',  image: 'Pictures/Lobster maki 1.png' },
        { id: 'ebi-tempura',    en: 'Ebi Tempura',    jp: '海老天ぷら',     desc: 'Prawn Tempura (3 Pieces)',                        price: '12', image: 'Pictures/Ebi Tempura 1.png' },
        { id: 'kawa-ebi',       en: 'Kawa Ebi',       jp: '川えび',             desc: 'Deep-Fried River Shrimp',                         price: '9',  image: 'Pictures/Kawa ebi 1.png' },
      ],
    },
    {
      id: 'grilled',
      number: '05',
      name: 'Grilled',
      subtitle: '焼き物',
      kind: 'dish',
      items: [
        { id: 'ika-yaki',       en: 'Ika Yaki',       jp: 'やりいか醤油焼き', desc: 'Soy-Grilled Squid (Whole)',                        price: '18', image: 'Pictures/Ika Yaki 1.png' },
        { id: 'kabayaki',       en: 'Kabayaki',       jp: '鰻蒲焼つまみ',         desc: 'Grilled Half Unagi Eel with Sweet Soy Sauce',      price: '15', image: 'Pictures/Kabayaki 1.png' },
        { id: 'potato-cheese',  en: 'Potato Cheese',  jp: 'チーズ入りポテト',     desc: 'Grilled Potato with Cheese and Mentaiko sauce',    price: '12', image: 'Pictures/Potato CHeese Yaki 1.png' },
        { id: 'yaki-nasu',      en: 'Yaki Nasu',      jp: '焼き茄子',                   desc: 'Grilled Eggplant',                                 price: '8',  image: 'Pictures/Yaki Nasu 1.png' },
        { id: 'mentaiko-yaki',  en: 'Mentaiko Yaki',  jp: '焼き明太子',               desc: 'Grilled Spicy Cod Roe',                            price: '10', image: 'Pictures/Mentaiko Yaki 1.png' },
        { id: 'eihire',         en: 'Eihire',         jp: 'エイひれ',                   desc: 'Grilled Rayfin',                                   price: '12', image: 'Pictures/Eihire 1.png' },
        { id: 'teba-yaki',      en: 'Teba Yaki',      jp: '手羽焼き',                   desc: 'Salt Grilled Chicken Wing (2 Wings)',              price: '6',  image: 'Pictures/Teba yaki 1.png' },
      ],
    },
    {
      id: 'souzai',
      number: '06',
      name: 'Souzai',
      subtitle: '惣菜',
      kind: 'dish',
      items: [
        { id: 'niku-jaga',     en: 'Niku Jaga',     jp: '肉じゃが',                   desc: 'Soy Braised Beef and Potato',                       price: '7', image: 'Pictures/Niku Jaga 1.png' },
        { id: 'daikon',        en: 'Daikon',        jp: '大根おでん',               desc: 'Braised Radish ODEN (2 Pieces)',                    price: '5', image: 'Pictures/Daikon 1.png' },
        { id: 'age-nasu',      en: 'Age Nasu',      jp: '揚げ茄子浸し',           desc: 'Marinated Fried Eggplant',                          price: '5', image: 'Pictures/Age Nasu 1.png' },
        { id: 'buta-niniku',   en: 'Buta Niniku',   jp: '豚にんにくの芽炒め', desc: 'Sautéed Pork with Garlic Sprout',                   price: '6', image: 'Pictures/Buta Niniku 1.png' },
        { id: 'tamago',        en: 'Tamago',        jp: '玉子焼き',                   desc: 'Egg Omelette (5 Pieces)',                           price: '5', image: 'Pictures/Tamago 1.png' },
        { id: 'goya',          en: 'Goya',          jp: 'ゴーヤ炒め',               desc: 'Sautéed Bitter Gourd',                              price: '6', image: 'Pictures/Goya 1.png' },
        { id: 'potato-salad',  en: 'Potato Salad',  jp: 'ポテトサラダ',           desc: 'Potato Salad with Carrot, Onions, Eggs and Cucumber', price: '6', image: 'Pictures/Potato Salad 1.png' },
        { id: 'hijiki',        en: 'Hijiki',        jp: 'ひじき',                       desc: 'Braised HIJIKI Seaweed',                            price: '6', image: 'Pictures/Hijiki 1.png' },
        { id: 'ohitashi',      en: 'Ohitashi',      jp: 'ほうれん草おひたし',  desc: 'Light Marinated Spinach with Soy Broth',            price: '6', image: 'Pictures/Ohitashi 1.png' },
      ],
    },
    {
      id: 'rice',
      number: '07',
      name: 'Rice',
      subtitle: 'ご飯',
      kind: 'dish',
      items: [
        { id: 'salmon-ikura-don', en: 'Salmon Ikura Don', jp: '鮭いくら丼',                       desc: 'Salmon Sashimi and Ikura with Rice',                                  price: '22', image: 'Pictures/Salmon Ikura don 1.png' },
        { id: 'maguro-don',       en: 'Maguro Don',       jp: '鮪丼',                                   desc: 'Soy Marinated Tuna Sashimi with Rice',                                price: '16', image: 'Pictures/Maguro don 1.png' },
        { id: 'una-juu',          en: 'Una-Juu',          jp: '鰻重（おでん出汁スープ付き）', desc: 'Grilled Full Unagi Eel with Rice (Served with Oden Dashi Soup)',      price: '23', image: 'Pictures/Unajuu 1.png' },
        { id: 'una-don',          en: 'Una-Don',          jp: '鰻丼（おでん出汁スープ付き）', desc: 'Grilled Half Unagi Eel with Rice (Served with Oden Dashi Soup)',      price: '18', image: 'Pictures/Una Don 1.png' },
        { id: 'gyu-don',          en: 'Gyu-Don',          jp: '牛丼',                                   desc: 'Rice with Soy Braised Beef with Onsen Tamago',                        price: '16', image: 'Pictures/Gyu don 1.png' },
        { id: 'gyuu-suji-gohan',  en: 'Gyuu-Suji Gohan',  jp: '牛すじ炊き込みご飯',         desc: 'Rice Mixed with Beef Tendon',                                         price: '12', image: 'Pictures/Gyu Suji 1.png' },
        { id: 'ocha-zuke',        en: 'Ocha-Zuke',        jp: 'お茶漬け（梅、明太子、鮭）', desc: 'Tea Soup Rice (Choice of Plum, Cod Roe or Salmon)',                   price: '8',  image: 'Pictures/Ochazuke 1.png' },
      ],
    },
    {
      id: 'noodles',
      number: '08',
      name: 'Noodles',
      subtitle: '麺',
      kind: 'dish',
      items: [
        { id: 'zaru-soba', en: 'Zaru-Soba', jp: 'ざるそば', desc: 'Cold Buckwheat Noodles',     price: '10', image: 'Pictures/Zaru Soba 1.png' },
        { id: 'kake-soba', en: 'Kake-Soba', jp: 'かけそば', desc: 'Hot Soup Buckwheat Noodles', price: '10', image: 'Pictures/Kake Soba 1.png' },
      ],
    },
    {
      id: 'drinks',
      number: '09',
      name: 'Drinks',
      subtitle: 'ドリンク',
      kind: 'drink',
      items: [
        // Alcoholic
        { id: 'sapporo-draft', category: 'Alcoholic', en: 'Sapporo Draft', jp: 'サッポロ生',         desc: '', price: '8 / 10', sizes: 'Small / Medium' },
        { id: 'sapporo-black', category: 'Alcoholic', en: 'Sapporo Black', jp: 'サッポロ黒生',       desc: '', price: '8 / 10', sizes: 'Small / Medium' },
        { id: 'half-half',     category: 'Alcoholic', en: 'Half & Half',   jp: 'ハーフ＆ハーフ',     desc: '', price: '8 / 10', sizes: 'Small / Medium' },
        { id: 'shouchu',       category: 'Alcoholic', en: 'Shouchu',       jp: '焼酎（麦・芋）',     desc: 'Barley or Potato', price: '10 / 90', sizes: 'Glass / Bottle' },
        { id: 'yuzu-hi',       category: 'Alcoholic', en: 'Yuzu-Hi',       jp: '山柚木ハイ',         desc: '',                                 price: '10' },
        { id: 'chuu-hi',       category: 'Alcoholic', en: 'Chuu-Hi',       jp: '酎ハイ',             desc: '',                                 price: '10' },
        { id: 'oolong-hi',     category: 'Alcoholic', en: 'Oolong-Hi',     jp: 'ウーロンハイ',       desc: '',                                 price: '10' },
        { id: 'umeshu-soda',   category: 'Alcoholic', en: 'Umeshu Soda',   jp: '梅酒ソーダ',         desc: '',                                 price: '10' },
        { id: 'hiball',        category: 'Alcoholic', en: 'Hiball',        jp: 'ハイボール',         desc: '',                                 price: '15' },
        { id: 'hot-sake',      category: 'Alcoholic', en: 'Hot Sake',      jp: 'お酒燗',             desc: 'Kiku Masamune (smooth & bold) or Umeno Kotobuki (fragrant & mellow)', price: '28', sizes: 'Pot' },

        // Non-Alcoholic
        { id: 'coke-zero', category: 'Non-Alcoholic', en: 'Coke Zero', jp: 'ゼロコーラ', desc: '',                                                          price: '6' },
        { id: 'lemonade',  category: 'Non-Alcoholic', en: 'Lemonade',  jp: 'レモネード', desc: '',                                                          price: '6' },
        { id: 'calpis',  category: 'Non-Alcoholic', en: 'Calpis Soda',  jp: 'カルピスソーダ', desc: '',                                                    price: '6' },
        { id: 'coke',      category: 'Non-Alcoholic', en: 'Coke',      jp: 'コーラ',     desc: '',                                                          price: '5' },
        { id: 'tea',       category: 'Non-Alcoholic', en: 'Tea',       jp: 'お茶',       desc: '*Not chargeable for guests drinking alcohol',               price: '4' },
      ],
    },
    {
      id: 'sake',
      number: '10',
      name: 'Sake',
      subtitle: '酒',
      kind: 'sake',
      // Sake price columns are: Glass 120ml / Carafe (S) 180ml / Carafe (M) 360ml / Bottle 720ml.
      // Names below are placeholders from the printed PDF — replace with real bottles.
      items: [
        { id: 'sake-1',  en: 'Sake Name', jp: '玉乃光 純米吟醸 青まね きつね', desc: 'Junmai Ginjyo · RPR 60% · Kyoto · +3.5', prices: [{ size: '120ml', price: '18' }, { size: '180ml', price: '26' }, { size: '360ml', price: '45' }, { size: '720ml', price: '88' }] },
        { id: 'sake-2',  en: 'Sake Name', jp: '玉乃光 純米吟醸 青まね きつね', desc: 'Junmai Ginjyo · RPR 60% · Kyoto · +3.5', prices: [{ size: '120ml', price: '18' }, { size: '180ml', price: '26' }, { size: '360ml', price: '45' }, { size: '720ml', price: '88' }] },
        { id: 'sake-3',  en: 'Sake Name', jp: '玉乃光 純米吟醸 青まね きつね', desc: 'Junmai Ginjyo · RPR 60% · Kyoto · +3.5', prices: [{ size: '120ml', price: '18' }, { size: '180ml', price: '26' }, { size: '360ml', price: '45' }, { size: '720ml', price: '88' }] },
        { id: 'sake-4',  en: 'Sake Name', jp: '玉乃光 純米吟醸 青まね きつね', desc: 'Junmai Ginjyo · RPR 60% · Kyoto · +3.5', prices: [{ size: '120ml', price: '18' }, { size: '180ml', price: '26' }, { size: '360ml', price: '45' }, { size: '720ml', price: '88' }] },
        { id: 'sake-5',  en: 'Sake Name', jp: '玉乃光 純米吟醸 青まね きつね', desc: 'Junmai Ginjyo · RPR 60% · Kyoto · +3.5', prices: [{ size: '120ml', price: '18' }, { size: '180ml', price: '26' }, { size: '360ml', price: '45' }, { size: '720ml', price: '88' }] },
        { id: 'sake-6',  en: 'Sake Name', jp: '玉乃光 純米吟醸 青まね きつね', desc: 'Junmai Ginjyo · RPR 60% · Kyoto · +3.5', prices: [{ size: '120ml', price: '18' }, { size: '180ml', price: '26' }, { size: '360ml', price: '45' }, { size: '720ml', price: '88' }] },
        { id: 'sake-7',  en: 'Sake Name', jp: '玉乃光 純米吟醸 青まね きつね', desc: 'Junmai Ginjyo · RPR 60% · Kyoto · +3.5', prices: [{ size: '120ml', price: '18' }, { size: '180ml', price: '26' }, { size: '360ml', price: '45' }, { size: '720ml', price: '88' }] },
        { id: 'sake-8',  en: 'Sake Name', jp: '玉乃光 純米吟醸 青まね きつね', desc: 'Junmai Ginjyo · RPR 60% · Kyoto · +3.5', prices: [{ size: '120ml', price: '18' }, { size: '180ml', price: '26' }, { size: '360ml', price: '45' }, { size: '720ml', price: '88' }] },
        { id: 'sake-9',  en: 'Sake Name', jp: '玉乃光 純米吟醸 青まね きつね', desc: 'Junmai Ginjyo · RPR 60% · Kyoto · +3.5', prices: [{ size: '120ml', price: '18' }, { size: '180ml', price: '26' }, { size: '360ml', price: '45' }, { size: '720ml', price: '88' }] },
        { id: 'sake-10', en: 'Sake Name', jp: '玉乃光 純米吟醸 青まね きつね', desc: 'Junmai Ginjyo · RPR 60% · Kyoto · +3.5', prices: [{ size: '120ml', price: '18' }, { size: '180ml', price: '26' }, { size: '360ml', price: '45' }, { size: '720ml', price: '88' }] },
      ],
    },
  ],
};
