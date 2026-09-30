/**
 * この単元アプリだけの設定。
 *
 * 国語の読解アプリ（ごんぎつね・一つの花・アップとルーズ・白いぼうし）は、App.tsx・TitleScreen.tsx・
 * lib/・scripts/ を共通にして、単元ごとにちがうものを **このファイルと data.ts だけ** に置く。
 * 1つのアプリで直したことを、ファイルをコピーするだけでほかのアプリにも入れられるようにするため。
 */

export const UNIT = {
  /** 学級ポータルの app_id（カタログ・apps テーブルと一致させる）。localStorage のキーの頭にも使う */
  appId: 'hitotsunohana',
  title: '一つの花',
  /** タイトル画面の大きな文字。accent の部分だけ色を付ける */
  titleMain: '一つの',
  titleAccent: '花',
  author: '今西 祐行',
  publisher: '光村図書 国語 4年',
  url: 'https://syo4-hitotsunohana.vercel.app',
  /** マスコットの呼び名（吹き出しの説明などに使う） */
  mascotName: 'ゆみ子',
  /** 物語文なら「場面」、説明文なら「だん落」 */
  sceneWord: '場面',
  /** 使い方の1枚目 */
  onboardingHello: 'コスモスの花を持った「ゆみ子」がいっしょに学ぶよ。まちがえても大丈夫！ヒントを出してくれるから、あきらめないでね。',
} as const;

/** 場面の区切り（時代・場面）。data.ts の structure[].section のキー */
export const SECTIONS: Record<string, { label: string; card: string; badge: string; text: string }> = {
  war: { label: '戦争中', card: 'border-orange-300 bg-orange-50', badge: 'bg-orange-500 text-white', text: 'text-orange-600' },
  parting: { label: '別れ', card: 'border-rose-400 bg-rose-50', badge: 'bg-rose-500 text-white', text: 'text-rose-600' },
  after: { label: '十年後', card: 'border-emerald-400 bg-emerald-50', badge: 'bg-emerald-500 text-white', text: 'text-emerald-600' },
};

/** 場面マップの見出し */
export const STRUCTURE = {
  title: '場面の組み立てマップ',
  tag: '時の流れで読む',
  intro: '物語の場面のはたらきを見てみよう。カードをタップすると、左の本文へジャンプし、読みどころが開くよ。',
};

/** 心情カードの見出し（data.ts の structure[].feeling.who のキー） */
export const WHO_LABEL: Record<string, string> = {
  yumi: 'ゆみ子',
  father: 'お父さん',
  mother: 'お母さん',
  theme: '物語のテーマ',
};

/**
 * 対比表（2×2）。data.ts の contrastChips[].correctCell は `${行のkey}-${列のkey}` か 'distractor'。
 * summary の **〜** は太字で出す。
 */
export const CONTRAST = {
  title: '戦争中 ⇄ 十年後 対比表',
  guide: '「くらし（食べ物）」と「コスモス（お父さんの花）」が、戦争中と十年後でどう変わったか整理しよう。',
  rows: [
    { key: 'war', label: '戦争中', cls: 'text-orange-700 bg-orange-100' },
    { key: 'after', label: '十年後', cls: 'text-emerald-700 bg-emerald-100' },
  ],
  cols: [
    { key: 'life', label: 'くらし\n（食べ物）', cls: 'text-amber-700 bg-amber-50', border: 'border-amber-200' },
    { key: 'cosmos', label: 'コスモス\n（花）', cls: 'text-pink-700 bg-pink-50', border: 'border-pink-200' },
  ],
  summaryTitle: '完成！この物語の主題は——',
  summary: 'くらし（食べ物）は「物がない戦争中」から「豊かな十年後」へ大きく**変わった**。でも、お父さんがくれた**「一輪」のコスモスが「いっぱい」に増えた**ように、ゆみ子を思うお父さんの愛と平和への願いは、形を変えて今も**変わらず**ゆみ子を包んでいる。',
};
