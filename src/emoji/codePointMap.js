/* @flow strict-local */
/* eslint-disable spellcheck/spell-checker */

/** Maps certain emoji to substitutes, for us to show instead. */
export const override: { [code: string]: string } = {
  // :check_mark: -> :check: because the former is invisible on a light
  // background, i.e. when not in night mode.
  '2714': '2705',
};

/**
 * Maps Zulip "emoji name" to Zulip "emoji code" for all known Unicode emoji.
 *
 * Many codes have multiple names.  For example: as of late 2018, there were
 * approximately 1600 names for 1000 codes, with about 400 codes having >=2
 * names, about 100 having >=3, up to as many as 6 names for the two
 * record-holders ('2620' and '1f5dd').
 *
 * For the format of these emoji codes, see the comment on
 * Reaction.emoji_code here:
 *   https://github.com/zulip/zulip/blob/master/zerver/models.py
 */
export const unicodeCodeByName: { [name: string]: string } = {
  '+1': '1f44d',
  '-1': '1f44e',
  '0': '0030-20e3',
  '1': '0031-20e3',
  '10': '1f51f',
  '100': '1f4af',
  '1234': '1f522',
  '2': '0032-20e3',
  '3': '0033-20e3',
  '4': '0034-20e3',
  '5': '0035-20e3',
  '6': '0036-20e3',
  '7': '0037-20e3',
  '8': '0038-20e3',
  '8_ball': '1f3b1',
  '9': '0039-20e3',
  a: '1f170',
  ab: '1f18e',
  abc: '1f524',
  abcd: '1f521',
  accessible: '267f',
  accommodations: '1f6cc',
  acrobatics: '1f938',
  action: '1f3ac',
  add: '2795',
  aerial_tramway: '1f6a1',
  agent: '1f575',
  agony: '1f616',
  airplane: '2708',
  airplane_arrival: '1f6ec',
  airplane_departure: '1f6eb',
  alarm: '1f413',
  alarm_clock: '23f0',
  alchemy: '2697',
  alembic: '2697',
  alert: '1f6a8',
  alien: '1f47d',
  all_good: '2705',
  alphabet: '1f521',
  ambulance: '1f691',
  american_football: '1f3c8',
  amphora: '1f3fa',
  anchor: '2693',
  android: '1f4f1',
  angel: '1f47c',
  anger: '1f4a2',
  anger_bubble: '1f5ef',
  angry: '1f620',
  angry_cat: '1f63e',
  angry_devil: '1f47f',
  anguish: '1f62b',
  anguished: '1f627',
  ant: '1f41c',
  anxious: '1f62c',
  applause: '1f44f',
  apple: '1f34e',
  approved: '2705',
  aquarius: '2652',
  arabian_camel: '1f42a',
  arcade: '1f579',
  archery: '1f3f9',
  archive: '1f5c3',
  aries: '2648',
  arms_open: '1f917',
  arrival: '1f6ec',
  art: '1f3a8',
  asking_a_question: '261d',
  asterisk: '002a-20e3',
  astonished: '1f632',
  at_work: '2692',
  athletic_shoe: '1f45f',
  atm: '1f3e7',
  atom: '269b',
  attachment: '1f4ce',
  avocado: '1f951',
  b: '1f171',
  baa: '1f411',
  baby: '1f476',
  baby_bottle: '1f37c',
  baby_change_station: '1f6bc',
  baby_chick: '1f424',
  back: '1f519',
  backpack: '1f392',
  bacon: '1f953',
  badminton: '1f3f8',
  baggage_claim: '1f6c4',
  baguette: '1f956',
  balance: '2696',
  ball: '26f9',
  balloon: '1f388',
  ballot_box: '1f5f3',
  ballpoint_pen: '1f58a',
  bam: '1f4a2',
  bamboo: '1f38d',
  banana: '1f34c',
  bangbang: '203c',
  bank: '1f3e6',
  bar_chart: '1f4ca',
  barber: '1f488',
  baseball: '26be',
  basketball: '1f3c0',
  bat: '1f987',
  bath: '1f6c0',
  bathtub: '1f6c1',
  battery: '1f50b',
  beach: '1f3d6',
  beach_umbrella: '26f1',
  bear: '1f43b',
  bed: '1f6cf',
  bedroom: '1f6cf',
  bee: '1f41d',
  beer: '1f37a',
  beers: '1f37b',
  beetle: '1f41e',
  beginner: '1f530',
  bell: '1f514',
  bellhop_bell: '1f6ce',
  bento: '1f371',
  betrayed: '1f52a',
  bicycle: '1f6b2',
  big_frown: '2639',
  big_rig: '1f69b',
  big_smile: '1f604',
  bike: '1f6b2',
  bikini: '1f459',
  billiards: '1f3b1',
  biohazard: '2623',
  bird: '1f426',
  birthday: '1f382',
  black_and_white_square: '1f533',
  black_belt: '1f94b',
  black_circle: '26ab',
  black_flag: '1f3f4',
  black_heart: '1f5a4',
  black_large_square: '2b1b',
  black_medium_small_square: '25fe',
  black_medium_square: '25fc',
  black_small_square: '25aa',
  blank: '1f636',
  blossom: '1f33c',
  blow_a_kiss: '1f618',
  blowfish: '1f421',
  blue_book: '1f4d8',
  blue_circle: '1f535',
  blue_heart: '1f499',
  blush: '1f60a',
  blushing: '1f633',
  boar: '1f417',
  boat: '26f5',
  bomb: '1f4a3',
  boo: '1f47b',
  book: '1f4d6',
  bookmark: '1f516',
  books: '1f4da',
  boom: '1f4a5',
  boot: '1f462',
  bouquet: '1f490',
  bow: '1f647',
  bow_and_arrow: '1f3f9',
  bowling: '1f3b3',
  boxing_glove: '1f94a',
  boy: '1f466',
  bravery: '1f49c',
  bread: '1f35e',
  breakfast: '1f95e',
  bride: '1f470',
  bridge: '1f309',
  briefcase: '1f4bc',
  brightness: '1f506',
  broken_heart: '1f494',
  bronze: '1f949',
  buddhism: '2638',
  bug: '1f41b',
  bulb: '1f4a1',
  bull: '1f402',
  bullet_train: '1f685',
  bullhorn: '1f4e2',
  bulls_eye: '1f3af',
  bunny: '1f430',
  burial: '26b0',
  burrito: '1f32f',
  bus: '1f68c',
  bus_stop: '1f68f',
  butterfly: '1f98b',
  buzz: '1f41d',
  cactus: '1f335',
  cake: '1f370',
  calendar: '1f4c5',
  calf: '1f42e',
  call_me: '1f919',
  calling: '1f4f2',
  camel: '1f42b',
  camera: '1f4f7',
  camping: '26fa',
  campsite: '1f3d5',
  cancer: '264b',
  candle: '1f56f',
  candy: '1f36c',
  canoe: '1f6f6',
  cant_talk: '1f637',
  capital_abcd: '1f520',
  capital_letters: '1f520',
  capricorn: '2651',
  car: '1f697',
  card_index: '1f4c7',
  carousel: '1f3a0',
  carp_streamer: '1f38f',
  carpenter_square: '1f4d0',
  carrot: '1f955',
  cartwheel: '1f938',
  castle: '1f3f0',
  cat: '1f408',
  caterpillar: '1f41b',
  caution: '26a0',
  cd: '1f4bf',
  celebration: '1f388',
  cell_reception: '1f4f6',
  chains: '26d3',
  champagne: '1f37e',
  chart: '1f4c8',
  check: '2705',
  check_mark: '2714',
  checkbox: '2611',
  checkered_flag: '1f3c1',
  cheese: '1f9c0',
  cherries: '1f352',
  cherry_blossom: '1f338',
  chestnut: '1f330',
  chick: '1f424',
  chicken: '1f414',
  children_crossing: '1f6b8',
  chili_pepper: '1f336',
  chipmunk: '1f43f',
  chocolate: '1f36b',
  christianity: '271d',
  church: '26ea',
  cinema: '1f3a6',
  circle: '2b55',
  circus: '1f3aa',
  city: '1f3d9',
  city_sunrise: '1f307',
  cl: '1f191',
  clap: '1f44f',
  classical_building: '1f3db',
  clink: '1f942',
  clipboard: '1f4cb',
  clock: '1f557',
  clockwise: '1f503',
  closed_book: '1f4d5',
  closed_mailbox: '1f4ea',
  closed_umbrella: '1f302',
  clothing: '1f45a',
  cloud: '2601',
  cloudy: '1f325',
  clover: '2618',
  clown: '1f921',
  clubs: '2663',
  cluck: '1f414',
  clue: '1f5dd',
  'cock-a-doodle-doo': '1f413',
  cocktail: '1f378',
  coffee: '2615',
  coffin: '26b0',
  cold_sweat: '1f630',
  collision: '1f4a5',
  comet: '2604',
  commitment: '1f510',
  commodities: '1f6e2',
  composition_book: '1f4d3',
  compression: '1f5dc',
  computer: '1f4bb',
  computer_mouse: '1f5b1',
  concerned: '1f615',
  conch: '1f41a',
  condemned: '1f3da',
  confetti: '1f38a',
  confounded: '1f616',
  confused: '1f615',
  congratulations: '1f389',
  construction: '1f3d7',
  construction_worker: '1f477',
  construction_zone: '1f6a7',
  control_knobs: '1f39b',
  convenience_store: '1f3ea',
  cookie: '1f36a',
  cooking: '1f373',
  cool: '1f192',
  cop: '1f46e',
  corn: '1f33d',
  couch_and_lamp: '1f6cb',
  counterclockwise: '1f504',
  cow: '1f404',
  cowboy: '1f920',
  crab: '1f980',
  crash: '1f4a5',
  crayon: '1f58d',
  crazy: '1f61c',
  credit_card: '1f4b3',
  cremation: '26b1',
  crew: '1f6a3',
  cricket: '1f3cf',
  cricket_bat: '1f3cf',
  crocodile: '1f40a',
  croissant: '1f950',
  cross: '271d',
  cross_mark: '274c',
  crossed_flags: '1f38c',
  crown: '1f451',
  cruise: '1f6f3',
  crushed: '1f940',
  cry: '1f622',
  crying_cat: '1f63f',
  crystal: '1f48e',
  crystal_ball: '1f52e',
  cucumber: '1f952',
  cupid: '1f498',
  curry: '1f35b',
  custard: '1f36e',
  customs: '1f6c3',
  cute: '1f4a0',
  cyclist: '1f6b4',
  cyclone: '1f300',
  dagger: '1f5e1',
  dancer: '1f483',
  dancers: '1f46f',
  dancing: '1f57a',
  danger: '26a0',
  dango: '1f361',
  dark_sunglasses: '1f576',
  darts: '1f3af',
  dash: '1f4a8',
  date: '1f4c6',
  death: '2620',
  debit_card: '1f4b3',
  deciduous_tree: '1f333',
  decoration: '1f380',
  decorative_notebook: '1f4d4',
  decrease: '1f53d',
  decreasing: '1f4c9',
  deer: '1f98c',
  denim: '1f456',
  department_store: '1f3ec',
  departure: '1f6eb',
  derelict_house: '1f3da',
  desert: '1f3dc',
  desktop_computer: '1f5a5',
  detective: '1f575',
  devil: '1f47f',
  diamond_with_a_dot: '1f4a0',
  diamonds: '2666',
  dice: '1f3b2',
  die: '1f3b2',
  digital_security: '1f50f',
  dim: '1f505',
  ding: '1f6ce',
  direct_hit: '1f3af',
  disabled: '267f',
  disappointed: '1f61e',
  disappointed_relieved: '1f625',
  disco: '1f57a',
  distraught: '1f629',
  divide: '2797',
  division: '2797',
  dizzy: '1f635',
  do_not_litter: '1f6af',
  document: '1f4c4',
  dog: '1f415',
  dogi: '1f94b',
  dollar_bills: '1f4b5',
  dollars: '1f4b2',
  dolls: '1f38e',
  dolphin: '1f42c',
  done_deal: '1f91d',
  doner_kebab: '1f959',
  donut: '1f369',
  door: '1f6aa',
  dormouse: '1f42d',
  double_down: '23ec',
  double_exclamation: '203c',
  double_loop: '27bf',
  double_up: '23eb',
  doughnut: '1f369',
  dove: '1f54a',
  dove_of_peace: '1f54a',
  down: '2b07',
  down_button: '1f53d',
  downvote: '1f53d',
  downwards_trend: '1f4c9',
  dragon: '1f409',
  dragon_face: '1f432',
  drama: '1f3ad',
  dream: '1f4ad',
  drenched: '1f327',
  dress: '1f457',
  drinking_water: '1f6b0',
  drive_with_care: '1f6b8',
  drooling: '1f924',
  drop: '1f4a7',
  drum: '1f941',
  drumstick: '1f357',
  duck: '1f986',
  duel: '2694',
  dungeon: '1f5dd',
  dvd: '1f4c0',
  'e-mail': '1f4e7',
  eagle: '1f985',
  ear: '1f442',
  ear_of_rice: '1f33e',
  earth_africa: '1f30d',
  earth_americas: '1f30e',
  earth_asia: '1f30f',
  east: '27a1',
  easy_come_easy_go: '1f4b8',
  eating_utensils: '1f374',
  egg: '1f95a',
  eggplant: '1f346',
  eight: '0038-20e3',
  eight_pointed_star: '2734',
  eight_spoked_asterisk: '2733',
  elderly_man: '1f474',
  elderly_woman: '1f475',
  electric_plug: '1f50c',
  elephant: '1f418',
  elevated_train: '1f69d',
  email: '2709',
  embarrassed: '1f633',
  empty_mailbox: '1f4ed',
  encrypted: '1f5dd',
  end: '1f51a',
  engineer: '2699',
  envelope: '2709',
  envy: '1f49a',
  euro_banknotes: '1f4b6',
  evergreen_tree: '1f332',
  exchange: '1f4b1',
  exclamation: '2757',
  exhausted: '1f625',
  expecting: '1f930',
  explosion: '1f4a5',
  expressionless: '1f611',
  eye: '1f441',
  eyes: '1f440',
  face_palm: '1f926',
  face_with_thermometer: '1f912',
  factory: '1f3ed',
  fall: '1f343',
  fallen_leaf: '1f342',
  family: '1f46a',
  fast_down: '23ec',
  fast_forward: '23e9',
  fast_reverse: '23ea',
  fast_up: '23eb',
  fax: '1f4e0',
  fear: '1f628',
  feet: '1f463',
  fencing: '1f93a',
  ferris_wheel: '1f3a1',
  ferry: '26f4',
  field_hockey: '1f3d1',
  file: '1f4c4',
  file_cabinet: '1f5c4',
  file_folder: '1f4c1',
  film: '1f39e',
  find: '1f50d',
  fingers_crossed: '1f91e',
  fire: '1f525',
  fire_engine: '1f692',
  fire_truck: '1f692',
  fireworks: '1f386',
  first_place: '1f947',
  fish: '1f41f',
  fishing: '1f3a3',
  fist: '270a',
  fist_bump: '1f44a',
  five: '0035-20e3',
  fixing: '1f527',
  flags: '1f38f',
  flame: '1f525',
  flan: '1f36e',
  flashlight: '1f526',
  fleur_de_lis: '269c',
  flip_flops: '1f461',
  flipper: '1f42c',
  floppy_disk: '1f4be',
  flower: '1f337',
  flu: '1f912',
  flushed: '1f633',
  fog: '1f32b',
  foggy: '1f301',
  folder: '1f4c2',
  food: '1f372',
  football: '26bd',
  footprints: '1f463',
  fork_and_knife: '1f374',
  fork_and_knife_with_plate: '1f37d',
  fortune_telling: '1f52e',
  forward: '21aa',
  fountain: '26f2',
  fountain_pen: '1f58b',
  four: '0034-20e3',
  four_leaf_clover: '1f340',
  fox: '1f98a',
  framed_picture: '1f5bc',
  free: '1f193',
  fries: '1f35f',
  frog: '1f438',
  frosty: '26c4',
  frown: '1f641',
  frowning: '1f626',
  fuel_pump: '26fd',
  full_battery: '1f50b',
  full_moon: '1f315',
  funeral_urn: '26b1',
  furniture: '1f6cb',
  future: '1f52e',
  gas_pump: '26fd',
  gear: '2699',
  gecko: '1f98e',
  geek: '1f913',
  gelato: '1f368',
  gem: '1f48e',
  gemini: '264a',
  ghost: '1f47b',
  gift: '1f381',
  gift_heart: '1f49d',
  girl: '1f467',
  glamour: '2728',
  glass_of_milk: '1f95b',
  glasses: '1f453',
  globe: '1f310',
  glowing_star: '1f31f',
  go: '1f3c1',
  goal: '1f945',
  goat: '1f410',
  goblin: '1f47a',
  gold: '1f947',
  gold_record: '1f4bd',
  golf: '1f3cc',
  gondola: '1f6a0',
  goodnight: '1f31b',
  gooooooooal: '1f945',
  gorilla: '1f98d',
  got_it: '1f44c',
  graduate: '1f393',
  grapes: '1f347',
  grave: '26b0',
  green_apple: '1f34f',
  green_book: '1f4d7',
  green_heart: '1f49a',
  grey_exclamation: '2755',
  grey_question: '2754',
  grimacing: '1f62c',
  grinning: '1f600',
  grinning_face_with_smiling_eyes: '1f601',
  growing: '1f4c8',
  growing_heart: '1f497',
  grumpy: '1f621',
  gua_pi_mao: '1f472',
  guard: '1f482',
  guestrooms: '1f6cc',
  guitar: '1f3b8',
  gun: '1f52b',
  gym: '1f3cb',
  gymnastics: '1f938',
  haircut: '1f487',
  half_frown: '1f615',
  halo: '1f607',
  hamburger: '1f354',
  hammer: '1f528',
  hammer_and_pick: '2692',
  hammer_and_wrench: '1f6e0',
  hamster: '1f439',
  hand: '270b',
  handbag: '1f45c',
  handball: '1f93e',
  handshake: '1f91d',
  handyman: '1f528',
  handywoman: '1f528',
  happy: '1f600',
  hard_hat: '26d1',
  harvest: '1f33e',
  hash: '0023-20e3',
  hat: '1f452',
  hatching: '1f423',
  hatching_chick: '1f423',
  haunted: '1f47b',
  hazard: '2620',
  hazy: '1f32b',
  head_bandage: '1f915',
  heading_down: '2935',
  heading_up: '2934',
  headlines: '1f4f0',
  headphones: '1f3a7',
  hear_no_evil: '1f649',
  heart: '2764',
  heart_arrow: '1f498',
  heart_box: '1f49f',
  heart_exclamation: '2763',
  heart_eyes: '1f60d',
  heart_eyes_cat: '1f63b',
  heart_kiss: '1f618',
  heart_of_gold: '1f49b',
  heart_pulse: '1f497',
  heartache: '1f494',
  heartbeat: '1f493',
  hearts: '2665',
  helicopter: '1f681',
  hello: '1f44b',
  helmet: '26d1',
  helpless: '1f623',
  herb: '1f33f',
  hi: '1f44b',
  hibiscus: '1f33a',
  high_brightness: '1f506',
  high_five: '1f590',
  high_heels: '1f460',
  high_speed_train: '1f684',
  high_voltage: '26a1',
  hinduism: '1f549',
  hint: '1f5dd',
  hiss: '1f40d',
  hocho: '1f52a',
  hole: '1f573',
  hole_in_one: '26f3',
  holiday_tree: '1f384',
  home_phone: '1f4de',
  honey: '1f36f',
  honeybee: '1f41d',
  horizontal_traffic_light: '1f6a5',
  horn: '1f4ef',
  horse: '1f40e',
  horse_racing: '1f3c7',
  horse_riding: '1f3c7',
  hospital: '1f3e5',
  hot: '1f525',
  hot_pepper: '1f336',
  hot_springs: '2668',
  hotdog: '1f32d',
  hotel: '1f3e8',
  hourglass: '23f3',
  hourglass_done: '231b',
  house: '1f3e0',
  houses: '1f3d8',
  hover: '1f574',
  hug: '1f917',
  humpback_whale: '1f40b',
  hundred: '1f4af',
  hungry: '1f37d',
  hurricane: '1f300',
  hurt: '1f915',
  hush: '1f910',
  hushed: '1f62f',
  ice_cream: '1f368',
  ice_hockey: '1f3d2',
  ice_skate: '26f8',
  id: '1f194',
  idea: '1f4a1',
  immigration: '1f6c2',
  imp: '1f47f',
  in_bed: '1f6cc',
  in_love: '1f60d',
  inbox: '1f4e5',
  inbox_zero: '1f4ed',
  incorrect: '274c',
  increase: '1f53c',
  increasing: '1f4c8',
  info: '2139',
  information_desk_person: '1f481',
  injection: '1f489',
  injured: '1f915',
  innocent: '1f607',
  interrobang: '2049',
  invincible: '26d1',
  iphone: '1f4f1',
  islam: '262a',
  island: '1f3dd',
  izakaya_lantern: '1f3ee',
  'jack-o-lantern': '1f383',
  japan: '1f5fe',
  japan_post: '1f3e3',
  jeans: '1f456',
  jeep: '1f699',
  joker: '1f0cf',
  joking: '1f61c',
  joy: '1f602',
  joy_cat: '1f639',
  joystick: '1f579',
  judiasm: '2721',
  juggling: '1f939',
  justice: '2696',
  kaaba: '1f54b',
  kaching: '1f911',
  kawaii: '1f4a0',
  keikogi: '1f94b',
  key: '1f511',
  key_signing: '1f50f',
  keyboard: '2328',
  kick_scooter: '1f6f4',
  kimono: '1f458',
  king: '1f451',
  kiss: '1f617',
  kiss_smiling_eyes: '1f619',
  kiss_with_blush: '1f61a',
  kissing_cat: '1f63d',
  kitten: '1f431',
  kiwi: '1f95d',
  knife: '1f52a',
  koala: '1f428',
  label: '1f3f7',
  ladybug: '1f41e',
  landing: '1f6ec',
  landline: '1f4de',
  lantern: '1f3ee',
  laptop: '1f4bb',
  large_blue_diamond: '1f537',
  large_orange_diamond: '1f536',
  laughing: '1f606',
  laughter_tears: '1f602',
  leaves: '1f343',
  ledger: '1f4d2',
  left: '2b05',
  left_fist: '1f91b',
  left_hook: '21a9',
  left_right: '2194',
  lemon: '1f34b',
  leo: '264c',
  leopard: '1f406',
  lets_eat: '1f37d',
  level_slider: '1f39a',
  levitating: '1f574',
  lgbtq: '1f308',
  libra: '264e',
  lifestyles: '1f6cb',
  lift: '1f3cb',
  light_bulb: '1f4a1',
  light_rail: '1f688',
  lightning: '1f329',
  lightning_storm: '1f329',
  link: '1f517',
  linked: '1f587',
  lion: '1f981',
  lips: '1f444',
  lips_are_sealed: '1f910',
  lipstick: '1f484',
  lipstick_kiss: '1f48b',
  lit: '1f525',
  live_long_and_prosper: '1f596',
  living_room: '1f6cb',
  lizard: '1f98e',
  lock_with_key: '1f510',
  locked: '1f512',
  locked_bag: '1f6c5',
  locker: '1f6c5',
  lol: '1f606',
  lollipop: '1f36d',
  looking: '1f440',
  loop: '27b0',
  losing_money: '1f4b8',
  louder: '1f50a',
  loudspeaker: '1f4e2',
  love: '2764',
  love_hotel: '1f3e9',
  love_letter: '1f48c',
  love_you: '2764',
  low_brightness: '1f505',
  lower_left: '2199',
  lower_right: '2198',
  loyalty: '1f510',
  lucky: '1f340',
  lying: '1f925',
  m: '24c2',
  mad: '1f621',
  magnifying_glass: '1f50d',
  mahjong: '1f004',
  mail: '2709',
  mail_dropoff: '1f4ee',
  mail_received: '1f4e8',
  mail_sent: '1f4e9',
  mailbox: '1f4eb',
  maintenance: '1f528',
  maize: '1f33d',
  man: '1f468',
  man_and_woman_couple: '1f46b',
  man_and_woman_holding_hands: '1f46b',
  mandarin: '1f34a',
  mantelpiece_clock: '1f570',
  map: '1f5fa',
  maple_leaf: '1f341',
  martial_arts: '1f94b',
  mask: '1f637',
  massage: '1f486',
  meal: '1f37d',
  meat: '1f356',
  mechanical: '2699',
  medal: '1f3c5',
  medicine: '1f48a',
  megaphone: '1f4e3',
  melon: '1f348',
  memo: '1f4dd',
  men_couple: '1f46c',
  menorah: '1f54e',
  mens: '1f6b9',
  meow: '1f408',
  merry_go_round: '1f3a0',
  meteor: '2604',
  metro: '24c2',
  mic: '1f3a4',
  microphone: '1f3a4',
  microscope: '1f52c',
  middle_finger: '1f595',
  mike: '1f3a4',
  military_medal: '1f396',
  milk: '1f95b',
  milky_way: '1f30c',
  mine: '26cf',
  minibus: '1f690',
  minidisc: '1f4bd',
  minus: '2796',
  mischievous: '1f61b',
  mobile_phone: '1f4f1',
  money: '1f4b0',
  money_face: '1f911',
  money_with_wings: '1f4b8',
  monkey: '1f412',
  monkey_face: '1f435',
  monorail: '1f69d',
  moon: '1f319',
  moon_ceremony: '1f391',
  moon_face: '1f31d',
  mortar_board: '1f393',
  mosque: '1f54c',
  mostly_sunny: '1f324',
  mother_christmas: '1f936',
  mother_nature: '1f32c',
  motor_bike: '1f6f5',
  motor_boat: '1f6e5',
  motorcycle: '1f3cd',
  motorway: '1f6e3',
  mount_fuji: '1f5fb',
  mountain: '26f0',
  mountain_biker: '1f6b5',
  mountain_cableway: '1f6a0',
  mountain_railway: '1f69e',
  mountain_sunrise: '1f304',
  mouse: '1f401',
  mouth: '1f444',
  movie: '1f4fd',
  movie_camera: '1f3a5',
  movie_theater: '1f3a6',
  moving_truck: '1f69a',
  moyai: '1f5ff',
  mrs_claus: '1f936',
  multiplication: '2716',
  multiply: '2716',
  muscle: '1f4aa',
  mushroom: '1f344',
  music: '1f3b5',
  musical_keyboard: '1f3b9',
  musical_notes: '1f3b6',
  musical_score: '1f3bc',
  mute: '1f507',
  mute_notifications: '1f515',
  nail_care: '1f485',
  nail_polish: '1f485',
  namaste: '1f64f',
  name_badge: '1f4db',
  naruto: '1f365',
  national_park: '1f3de',
  nauseated: '1f922',
  nc17: '1f51e',
  nerd: '1f913',
  nervous: '1f62c',
  neutral: '1f610',
  new: '1f195',
  new_baby: '1f425',
  new_moon: '1f311',
  new_moon_face: '1f31a',
  new_york: '1f5fd',
  newspaper: '1f5de',
  next_track: '23ed',
  ng: '1f196',
  night: '1f303',
  night_sky: '1f30c',
  nine: '0039-20e3',
  no_bicycles: '1f6b3',
  no_entry: '26d4',
  no_mail: '1f4ed',
  no_mouth: '1f636',
  no_pedestrians: '1f6b7',
  no_phones: '1f4f5',
  no_signal: '1f645',
  no_smoking: '1f6ad',
  no_sound: '1f507',
  'non-potable_water': '1f6b1',
  noodles: '1f35c',
  nope: '1f645',
  north: '2b06',
  north_east: '2197',
  north_west: '2196',
  nose: '1f443',
  not_allowed: '1f6ab',
  note: '1f4dd',
  notebook: '1f4d3',
  notifications: '1f514',
  nuclear: '2622',
  number_one: '1f947',
  numbers: '1f522',
  nursery: '1f6bc',
  nut_and_bolt: '1f529',
  o: '1f17e',
  ocean: '1f30a',
  ocean_sunrise: '1f305',
  octagonal_sign: '1f6d1',
  octopus: '1f419',
  oden: '1f362',
  office: '1f3e2',
  office_supplies: '1f587',
  ogre: '1f479',
  oh_no: '1f615',
  oil_drum: '1f6e2',
  oink: '1f416',
  ok: '1f44c',
  ok_signal: '1f646',
  old_key: '1f5dd',
  older_man: '1f474',
  older_woman: '1f475',
  om: '1f549',
  on: '1f51b',
  oncoming_automobile: '1f698',
  oncoming_bus: '1f68d',
  oncoming_car: '1f698',
  oncoming_police_car: '1f694',
  oncoming_streetcar: '1f68a',
  oncoming_taxi: '1f696',
  oncoming_train: '1f686',
  oncoming_tram: '1f68a',
  oncoming_trolley: '1f68a',
  one: '0031-20e3',
  onigiri: '1f359',
  oops: '1f643',
  open_book: '1f4d6',
  open_hands: '1f450',
  open_mouth: '1f62e',
  ophiuchus: '26ce',
  oracle: '1f52e',
  orange: '1f34a',
  orange_book: '1f4d9',
  organize: '1f4c1',
  orthodox_cross: '2626',
  outbox: '1f4e4',
  overcast: '2601',
  owl: '1f989',
  ox: '1f402',
  p: '1f17f',
  package: '1f4e6',
  paella: '1f958',
  page: '1f4c4',
  pager: '1f4df',
  pained: '1f627',
  paintbrush: '1f58c',
  painting: '1f3a8',
  palette: '1f3a8',
  palm: '1f590',
  palm_tree: '1f334',
  pancakes: '1f95e',
  panda: '1f43c',
  paper: '1f4c4',
  paperclip: '1f4ce',
  paperclip_chain: '1f587',
  parking: '1f17f',
  part_alternation: '303d',
  partly_cloudy: '26c5',
  partly_sunny: '26c5',
  partly_sunny_with_rain: '1f326',
  party_ball: '1f38a',
  pass: '1f3ab',
  passenger_ship: '1f6f3',
  passport_control: '1f6c2',
  pause: '23f8',
  paw_prints: '1f43e',
  paws: '1f43e',
  peace: '262e',
  peace_sign: '270c',
  peach: '1f351',
  peanuts: '1f95c',
  pear: '1f350',
  pedestrian: '1f6b6',
  pen: '1f58a',
  pencil: '270f',
  penguin: '1f427',
  pensive: '1f614',
  performing_arts: '1f3ad',
  persevere: '1f623',
  person_frowning: '1f64d',
  person_pouting: '1f64e',
  person_tipping_hand: '1f481',
  petrol_pump: '26fd',
  phone: '260e',
  phone_off: '1f4f4',
  physics: '269b',
  piano: '1f3b9',
  pick: '26cf',
  pick_me: '1f64b',
  picture: '1f5bc',
  pig: '1f416',
  pig_nose: '1f43d',
  piglet: '1f437',
  pile_of_poo: '1f4a9',
  pill: '1f48a',
  pin: '1f4cd',
  pineapple: '1f34d',
  ping_pong: '1f3d3',
  pirate: '2620',
  pisces: '2653',
  pizza: '1f355',
  place_holder: '1f4d1',
  place_of_worship: '1f6d0',
  plant: '1f33f',
  play: '25b6',
  play_pause: '23ef',
  play_reverse: '25c0',
  playing_cards: '1f3b4',
  plus: '2795',
  point_down: '1f447',
  point_left: '1f448',
  point_of_information: '261d',
  point_right: '1f449',
  point_up: '1f446',
  poison: '2620',
  poker_face: '1f636',
  police: '1f46e',
  police_car: '1f693',
  pony: '1f434',
  poodle: '1f429',
  pool: '1f3b1',
  poop: '1f4a9',
  popcorn: '1f37f',
  post_office: '1f3e4',
  potable_water: '1f6b0',
  potato: '1f954',
  pouch: '1f45d',
  poultry: '1f357',
  pound_notes: '1f4b7',
  pouting_cat: '1f63e',
  pow: '1f4a2',
  power: '270a',
  praise: '1f64c',
  pray: '1f64f',
  prayer_beads: '1f4ff',
  pregnant: '1f930',
  present: '1f381',
  previous_track: '23ee',
  price_tag: '1f3f7',
  pride: '1f308',
  prince: '1f934',
  princess: '1f478',
  printer: '1f5a8',
  privacy: '1f50f',
  prohibited: '1f6ab',
  projector: '1f4fd',
  protected: '1f50f',
  pumpkin: '1f383',
  punch: '1f44a',
  puppy: '1f436',
  purple_heart: '1f49c',
  purse: '1f45b',
  push_pin: '1f4cc',
  put_litter_in_its_place: '1f6ae',
  queasy: '1f922',
  queen: '1f451',
  question: '2753',
  quiet: '1f910',
  rabbit: '1f407',
  race: '1f3c1',
  racecar: '1f3ce',
  radio: '1f4fb',
  radio_button: '1f518',
  radioactive: '2622',
  rage: '1f621',
  railway_car: '1f683',
  railway_track: '1f6e4',
  rainbow: '1f308',
  rainy: '1f327',
  raised_hand: '270b',
  raised_hands: '1f64c',
  raising_hand: '1f64b',
  ram: '1f40f',
  ramen: '1f35c',
  rat: '1f400',
  rated_for_violence: '1f5e1',
  receipt: '1f4c3',
  reception: '1f6ce',
  record: '23fa',
  recreational_vehicle: '1f699',
  recycle: '267b',
  red_book: '1f4d5',
  red_circle: '1f534',
  red_triangle_down: '1f53b',
  red_triangle_up: '1f53a',
  relaxed: '263a',
  relieved: '1f60c',
  reminder_ribbon: '1f397',
  repeat: '1f501',
  repeat_one: '1f502',
  reply: '21a9',
  rescue_worker: '26d1',
  restroom: '1f6bb',
  return: '1f504',
  revolving_hearts: '1f49e',
  rewind: '23ea',
  rhinoceros: '1f98f',
  ribbon: '1f380',
  rice: '1f35a',
  rice_cracker: '1f358',
  rideshare: '1f695',
  right: '27a1',
  right_fist: '1f91c',
  right_hook: '21aa',
  ring: '1f48d',
  road: '1f6e3',
  road_trip: '1f5fa',
  robot: '1f916',
  rock_carving: '1f5ff',
  rock_on: '1f918',
  rocket: '1f680',
  rofl: '1f923',
  roller_coaster: '1f3a2',
  rolling_eyes: '1f644',
  rolling_on_the_floor_laughing: '1f923',
  rolodex: '1f4c7',
  rooster: '1f413',
  rose: '1f339',
  rosette: '1f3f5',
  rotating_light: '1f6a8',
  rowboat: '1f6a3',
  rowing: '1f6a3',
  rugby: '1f3c9',
  ruler: '1f4cf',
  runner: '1f3c3',
  running: '1f3c3',
  running_shirt: '1f3bd',
  running_shoe: '1f45f',
  sad: '2639',
  safe: '1f510',
  safety_first: '26d1',
  sagittarius: '2650',
  sailboat: '26f5',
  sake: '1f376',
  salad: '1f957',
  sandal: '1f461',
  santa: '1f385',
  satchel: '1f392',
  satellite: '1f6f0',
  satellite_antenna: '1f4e1',
  saxophone: '1f3b7',
  say_cheese: '1f4f8',
  scales: '2696',
  scared: '1f628',
  school: '1f3eb',
  school_bus: '1f68c',
  school_crossing: '1f6b8',
  science: '1f52c',
  scientist: '1f52c',
  scissors: '2702',
  scooter: '1f6f5',
  scorpion: '1f982',
  scorpius: '264f',
  scream: '1f631',
  scream_cat: '1f640',
  screw: '1f529',
  scroll: '1f4dc',
  sculling: '1f6a3',
  sealed: '1f4e9',
  search: '1f50d',
  seashell: '1f41a',
  seat: '1f4ba',
  second_place: '1f948',
  secret: '1f5dd',
  secure: '1f510',
  see_no_evil: '1f648',
  seedling: '1f331',
  seeing_stars: '1f4ab',
  selfie: '1f933',
  semi_truck: '1f69b',
  senbei: '1f358',
  services: '1f6ce',
  settings: '2699',
  seven: '0037-20e3',
  sewing_pin: '1f4cd',
  shadow: '1f464',
  shadows: '1f465',
  shamrock: '2618',
  shark: '1f988',
  shaved_ice: '1f367',
  shawarma: '1f959',
  sheep: '1f411',
  shell: '1f41a',
  shield: '1f6e1',
  shinto_shrine: '26e9',
  ship: '1f6a2',
  shiro: '1f3ef',
  shirt: '1f455',
  shock: '1f628',
  shoe: '1f45e',
  shooting_star: '1f320',
  shopping_bags: '1f6cd',
  shopping_cart: '1f6d2',
  shopping_trolley: '1f6d2',
  shout: '1f4e3',
  shower: '1f6bf',
  shrimp: '1f990',
  shrinking: '1f4c9',
  shrug: '1f937',
  shuffle: '1f500',
  sick: '1f912',
  sign_of_the_horns: '1f918',
  signal_bars: '1f4f6',
  signal_strength: '1f4f6',
  silence: '1f910',
  silhouette: '1f464',
  silhouettes: '1f465',
  silver: '1f948',
  siren: '1f6a8',
  six: '0036-20e3',
  ski: '1f3bf',
  ski_lift: '1f6a1',
  skier: '26f7',
  skip_back: '23ee',
  skip_forward: '23ed',
  skull: '1f480',
  skull_and_crossbones: '2620',
  skyline: '1f3d9',
  sleeping: '1f634',
  sleepy: '1f62a',
  sleuth: '1f575',
  slight_frown: '1f641',
  slight_smile: '1f642',
  slot_machine: '1f3b0',
  small_airplane: '1f6e9',
  small_blue_diamond: '1f539',
  small_glass: '1f943',
  small_orange_diamond: '1f538',
  smartphone: '1f4f1',
  smile: '263a',
  smile_cat: '1f638',
  smiley: '1f603',
  smiley_cat: '1f63a',
  smiling_devil: '1f608',
  smiling_face_with_horns: '1f608',
  smiling_imp: '1f608',
  smirk: '1f60f',
  smirk_cat: '1f63c',
  smitten: '1f498',
  smoking: '1f6ac',
  smug: '1f60f',
  smug_cat: '1f63c',
  snail: '1f40c',
  snake: '1f40d',
  sneaker: '1f45f',
  sneaky: '1f575',
  sneezing: '1f927',
  snowboarder: '1f3c2',
  snowflake: '2744',
  snowman: '2603',
  snowstorm: '1f328',
  snowy: '1f328',
  snowy_mountain: '1f3d4',
  soaked: '1f327',
  sob: '1f62d',
  soccer: '26bd',
  soft_ice_cream: '1f366',
  soft_serve: '1f366',
  softer: '1f509',
  solidarity: '1f38c',
  soon: '1f51c',
  sort: '1f5c2',
  sos: '1f198',
  sound: '1f50a',
  soup: '1f372',
  south: '2b07',
  south_east: '2198',
  south_west: '2199',
  souvlaki: '1f959',
  space_invader: '1f47e',
  spades: '2660',
  spaghetti: '1f35d',
  sparkle: '2747',
  sparkler: '1f387',
  sparkles: '2728',
  sparkling_heart: '1f496',
  speak_no_evil: '1f64a',
  speaker: '1f508',
  speaking_head: '1f5e3',
  spectacles: '1f453',
  speech_balloon: '1f4ac',
  speech_bubble: '1f5e8',
  speechless: '1f636',
  speedboat: '1f6a4',
  spider: '1f577',
  spider_web: '1f578',
  spiral_notebook: '1f4d2',
  spiral_notepad: '1f5d2',
  spiral_shell: '1f41a',
  spock: '1f596',
  spooky: '1f47b',
  spoon: '1f944',
  sports: '26f9',
  sprout: '1f331',
  spy: '1f575',
  squared_ok: '1f197',
  squared_up: '1f199',
  squid: '1f991',
  stadium: '1f3df',
  star: '2b50',
  star_and_crescent: '262a',
  star_of_david: '2721',
  start: '1f3c1',
  station: '1f689',
  statue: '1f5fd',
  statue_of_liberty: '1f5fd',
  steam_locomotive: '1f682',
  stew: '1f372',
  stock_market: '1f4b9',
  stop: '1f91a',
  stop_button: '23f9',
  stop_sign: '1f6d1',
  stopwatch: '23f1',
  straightedge: '1f4cf',
  strawberry: '1f353',
  streetcar: '1f68b',
  stressed: '1f625',
  strike: '1f3b3',
  striped_pole: '1f488',
  stuck_out_tongue: '1f61d',
  stuck_out_tongue_wink: '1f61c',
  studio_microphone: '1f399',
  stuffed_flatbread: '1f959',
  subtract: '2796',
  suburb: '1f3e1',
  subway: '1f687',
  sun_and_rain: '1f326',
  sun_face: '1f31e',
  sunflower: '1f33b',
  sunglasses: '1f60e',
  sunny: '2600',
  sunrise: '1f305',
  sunset: '1f306',
  sunshowers: '1f326',
  surf: '1f3c4',
  surprise: '1f62e',
  surrender: '1f3f3',
  sushi: '1f363',
  suspension_railway: '1f69f',
  swap: '2194',
  swat: '1f5de',
  sweat: '1f613',
  sweat_drops: '1f4a6',
  sweat_smile: '1f605',
  sweet_potato: '1f360',
  swim: '1f3ca',
  swords: '2694',
  symbols: '1f523',
  synagogue: '1f54d',
  syringe: '1f489',
  table_setting: '1f37d',
  table_tennis: '1f3d3',
  taco: '1f32e',
  tada: '1f389',
  tag: '1f3f7',
  take_off: '1f6eb',
  taking_a_picture: '1f4f8',
  tanabata_tree: '1f38b',
  tangerine: '1f34a',
  tap_water: '1f6b0',
  taurus: '2649',
  taxi: '1f695',
  tea: '1f375',
  tears: '1f602',
  telephone: '260e',
  telescope: '1f52d',
  television: '1f4fa',
  temperature: '1f321',
  tempura: '1f364',
  ten: '1f51f',
  tennis: '1f3be',
  tent: '26fa',
  thank_you: '1f64f',
  theater: '1f3ad',
  thermometer: '1f321',
  thinking: '1f914',
  third_place: '1f949',
  this: '1f446',
  thought: '1f4ad',
  three: '0033-20e3',
  thumb_tack: '1f4cc',
  thumbs_down: '1f44e',
  thumbs_up: '1f44d',
  thunder_and_rain: '26c8',
  thunderstorm: '26c8',
  ticket: '1f39f',
  tie: '1f454',
  tiger: '1f405',
  tiger_cub: '1f42f',
  time: '1f557',
  time_ticking: '23f3',
  timer: '23f2',
  times_up: '231b',
  tired: '1f614',
  tm: '2122',
  toast: '1f942',
  toilet: '1f6bd',
  tokyo_tower: '1f5fc',
  tomato: '1f345',
  tongue: '1f445',
  tools: '1f6e0',
  top: '1f51d',
  top_hat: '1f3a9',
  tornado: '1f32a',
  tortoise: '1f422',
  tower: '1f5fc',
  toxic: '2620',
  trackball: '1f5b2',
  tractor: '1f69c',
  'tractor-trailer': '1f69b',
  trademark: '2122',
  traffic_light: '1f6a6',
  train: '1f682',
  train_car: '1f683',
  train_tracks: '1f6e4',
  tram: '1f68b',
  transport_truck: '1f69b',
  trash_can: '1f5d1',
  tree: '1f333',
  triangular_flag: '1f6a9',
  triangular_ruler: '1f4d0',
  trident: '1f531',
  triumph: '1f624',
  trolley: '1f68e',
  trophy: '1f3c6',
  tropical_drink: '1f379',
  tropical_fish: '1f420',
  truck: '1f69b',
  trumpet: '1f3ba',
  tshirt: '1f455',
  tulip: '1f337',
  tumbling: '1f938',
  turban: '1f473',
  turkey: '1f983',
  turtle: '1f422',
  tuxedo: '1f935',
  tv: '1f4fa',
  two: '0032-20e3',
  two_hearts: '1f495',
  two_men_holding_hands: '1f46c',
  two_women_holding_hands: '1f46d',
  typhoon: '1f300',
  ufo: '1f47d',
  umbrella: '2602',
  umbrella_with_rain: '2614',
  umm: '1f4ac',
  unamused: '1f612',
  underage: '1f51e',
  unicorn: '1f984',
  unlocked: '1f513',
  unread_mail: '1f4ec',
  up: '2b06',
  up_button: '1f53c',
  up_down: '2195',
  upper_left: '2196',
  upper_right: '2197',
  upside_down: '1f643',
  upvote: '1f53c',
  upwards_trend: '1f4c8',
  vase: '1f3fa',
  vertical_traffic_light: '1f6a6',
  very_angry: '1f621',
  vhs: '1f4fc',
  vibration_mode: '1f4f3',
  victory: '270c',
  video_camera: '1f4f9',
  video_game: '1f3ae',
  video_recorder: '1f4f9',
  videocassette: '1f4fc',
  violin: '1f3bb',
  virgo: '264d',
  vise: '1f5dc',
  voicemail: '27bf',
  volcano: '1f30b',
  volleyball: '1f3d0',
  volume: '1f39a',
  vs: '1f19a',
  wait_one_second: '261d',
  walking: '1f6b6',
  warm: '1f321',
  warning: '26a0',
  wastebasket: '1f5d1',
  watch: '231a',
  water_buffalo: '1f403',
  water_closet: '1f6be',
  water_drop: '1f4a7',
  water_polo: '1f93d',
  watermelon: '1f349',
  wave: '1f44b',
  wavy_dash: '3030',
  waxing_moon: '1f314',
  wc: '1f6be',
  weary: '1f629',
  weary_cat: '1f640',
  web: '1f578',
  wedding: '1f492',
  weight_lift: '1f3cb',
  welcome: '1f64f',
  west: '2b05',
  whale: '1f433',
  wheel_of_dharma: '2638',
  wheelchair: '267f',
  white_and_black_square: '1f532',
  white_circle: '26aa',
  white_flag: '1f3f3',
  white_flower: '1f4ae',
  white_large_square: '2b1c',
  white_medium_small_square: '25fd',
  white_medium_square: '25fb',
  white_small_square: '25ab',
  wilted_flower: '1f940',
  wind: '1f343',
  wind_chime: '1f390',
  windy: '1f32c',
  wine: '1f377',
  wink: '1f609',
  winner: '1f3c6',
  wish: '1f320',
  wish_tree: '1f38b',
  wolf: '1f43a',
  woman: '1f469',
  women_couple: '1f46d',
  womens: '1f6ba',
  woof: '1f415',
  work_in_progress: '1f6a7',
  work_out: '1f3cb',
  working_on_it: '1f6e0',
  world_map: '1f5fa',
  worried: '1f61f',
  wrench: '1f527',
  wrestling: '1f93c',
  writing: '270d',
  wrong: '274c',
  wrong_way: '26d4',
  www: '1f310',
  x: '274e',
  yacht: '1f6f3',
  yam: '1f360',
  yellow_heart: '1f49b',
  yen_banknotes: '1f4b4',
  yin_yang: '262f',
  yum: '1f60b',
  zap: '26a1',
  zero: '0030-20e3',
  zip_it: '1f910',
  zzz: '1f4a4',
};

export const specialEmojis: { [name: string]: string } = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
};
