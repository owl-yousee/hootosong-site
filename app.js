const sampleSongs = [
  { title:"アイドル", artist:"YOASOBI", favorite:true, status:"歌える", season:"通年", genres:["J-POP","アニソン"], lastSung:"2026-06-15", count:12 },
  { title:"怪獣の花唄", artist:"Vaundy", favorite:true, status:"歌える", season:"夏", genres:["J-POP"], lastSung:"2026-05-28", count:8 },
  { title:"晩餐歌", artist:"tuki.", favorite:false, status:"練習中", season:"秋", genres:["J-POP"], lastSung:"2026-04-12", count:3 },
  { title:"唱", artist:"Ado", favorite:true, status:"歌える", season:"通年", genres:["J-POP"], lastSung:"2026-06-03", count:6 },
  { title:"花になって", artist:"緑黄色社会", favorite:false, status:"要確認", season:"春", genres:["J-POP","アニソン"], lastSung:"", count:0 },
  { title:"Bling-Bang-Bang-Born", artist:"Creepy Nuts", favorite:false, status:"練習中", season:"通年", genres:["J-POP","アニソン"], lastSung:"2026-03-20", count:2 },
  { title:"美少女無罪♡パイレーツ", artist:"宝鐘マリン", favorite:true, status:"歌える", season:"夏", genres:["J-POP"], lastSung:"2026-05-18", count:9 },
  { title:"粛聖!! ロリ神レクイエム☆", artist:"しぐれうい", favorite:false, status:"要確認", season:"通年", genres:["J-POP"], lastSung:"", count:0 },
  { title:"ドライフラワー", artist:"優里", favorite:false, status:"要確認", season:"冬", genres:["J-POP"], lastSung:"2025-12-24", count:4 }
];

const $ = selector => document.querySelector(selector);
const els = {
  grid:$("#songGrid"), count:$("#songCount"), search:$("#searchInput"), status:$("#statusFilter"), season:$("#seasonFilter"), genre:$("#genreFilter"), vocal:$("#vocalFilter"), sort:$("#sortSelect"), csv:$("#csvInput"),
  empty:$("#emptyState"), toast:$("#toast"), message:$("#resultMessage"), listTitle:$("#listTitle"), clearSpecial:$("#clearSpecialFilter"),
  favoriteButtons:document.querySelectorAll("[data-favorite]"), overdueCount:$("#overdueCount"), themePanel:$("#themePanel"), themeButton:$("#themeButton"),
  dialog:$("#pickDialog"), pickedTitle:$("#pickedTitle"), pickedArtist:$("#pickedArtist"), pickKind:$("#pickKind"), retryPick:$("#retryPick"), pickLead:$("#pickLead"), pickReason:$("#pickReason"), pickCandidateList:$("#pickCandidateList"), pickEmptyHint:$("#pickEmptyHint"), randomConditionPanel:$("#randomConditionPanel"), randomPoolCount:$("#randomPoolCount"), randomStatus:$("#randomStatus"), randomGenre:$("#randomGenre"), randomVocal:$("#randomVocal"), randomKaraoke:$("#randomKaraoke"), randomCount:$("#randomCount"), randomFavoriteOnly:$("#randomFavoriteOnly"), randomOverdueOnly:$("#randomOverdueOnly"), pickAddSetlist:$("#pickAddSetlist"), pickAddDraft:$("#pickAddDraft"), pickShowSong:$("#pickShowSong"),
  pagination:$("#pagination"), pageSize:$("#pageSize"), prevPage:$("#prevPage"), nextPage:$("#nextPage"), pageStatus:$("#pageStatus"),
  songView:$("#songView"), historyView:$("#historyView"), historyList:$("#historyList"), historyEmpty:$("#historyEmpty"), streamCount:$("#streamCount"), archiveCount:$("#archiveCount"), streamDate:$("#streamDate"),
  songDialog:$("#songDialog"), songForm:$("#songForm"), deleteDialog:$("#deleteDialog"), deleteSongName:$("#deleteSongName"), deleteDraftDialog:$("#deleteDraftDialog"), deleteDraftName:$("#deleteDraftName"),
  setlistTargetDialog:$("#setlistTargetDialog"), setlistTargetSongTitle:$("#setlistTargetSongTitle"), setlistTargetSongArtist:$("#setlistTargetSongArtist"), setlistTargetTodayButton:$("#setlistTargetTodayButton"), setlistTargetDraftList:$("#setlistTargetDraftList"), setlistTargetDraftEmpty:$("#setlistTargetDraftEmpty"), setlistTargetNewDraftName:$("#setlistTargetNewDraftName"), setlistTargetCreateDraftButton:$("#setlistTargetCreateDraftButton"),
  restoreDialog:$("#restoreDialog"), restoreSummary:$("#restoreSummary"), restoreJson:$("#restoreJsonInput"),
  setlistView:$("#setlistView"), artistsView:$("#artistsView"), setlistList:$("#setlistList"), setlistEmpty:$("#setlistEmpty"), setlistCount:$("#setlistCount"), setlistTopCount:$("#setlistTopCount"),
  setlistName:$("#setlistName"), setlistStreamTitle:$("#setlistStreamTitle"), setlistMemo:$("#setlistMemo"),
  draftsView:$("#draftsView"), draftList:$("#draftList"), draftEmpty:$("#draftEmpty"), draftCount:$("#draftCount"), draftArchiveCount:$("#draftArchiveCount"), draftEditNotice:$("#draftEditNotice"), draftEditName:$("#draftEditName"),
  artistList:$("#artistList"), artistEmpty:$("#artistEmpty"), artistSearch:$("#artistSearch"), artistCount:$("#artistCount"), csvDebugPanel:$("#csvDebugPanel"), csvDebugContent:$("#csvDebugContent"),
  singLogView:$("#logsTabView"), singLogList:$("#singLogList"), singLogEmpty:$("#singLogEmpty"), singLogCount:$("#singLogCount"), singLogArchiveCount:$("#singLogArchiveCount"), singLogSearch:$("#singLogSearch"), singLogTypeFilter:$("#singLogTypeFilter"), singLogTitle:$("#singLogTitle"),
  logStatMonthTotal:$("#logStatMonthTotal"), logStatMonthStream:$("#logStatMonthStream"), logStatMonthKaraoke:$("#logStatMonthKaraoke"), logStatMonthPractice:$("#logStatMonthPractice"), logStatAll:$("#logStatAll"), singRankingList:$("#singRankingList"), recentSingList:$("#recentSingList"), recentSingCount:$("#recentSingCount"), rankButtons:document.querySelectorAll("[data-rank-type]"),
  singRecordDialog:$("#singRecordDialog"), singRecordForm:$("#singRecordForm"), singRecordSongLabel:$("#singRecordSongLabel"), singRecordSongIndex:$("#singRecordSongIndex"), singRecordType:$("#singRecordType"), singRecordKaraoke:$("#singRecordKaraoke"), singRecordMemo:$("#singRecordMemo"),
  songsTabView:$("#songsTabView"), logsTabView:$("#logsTabView"), settingsTabView:$("#settingsTabView"), bottomTabs:document.querySelectorAll("[data-bottom-tab]"),
  remoteView:$("#remoteView"), remoteModeButton:$("#remoteModeButton"), remoteSetlistCount:$("#remoteSetlistCount"), remoteSetlistSummary:$("#remoteSetlistSummary"), remoteSetlistList:$("#remoteSetlistList"), remoteSetlistEmpty:$("#remoteSetlistEmpty"), remoteCommitSetlist:$("#remoteCommitSetlist"), remoteLogCount:$("#remoteLogCount"), remoteLogList:$("#remoteLogList"), remoteLogToggle:$("#remoteLogToggle"), remoteLogEmpty:$("#remoteLogEmpty"), remoteRandomResult:$("#remoteRandomResult"), remoteSangDialog:$("#remoteSangDialog"), remoteSangDialogTitle:$("#remoteSangDialogTitle"), remoteSangDialogArtist:$("#remoteSangDialogArtist"), remoteSangDialogKey:$("#remoteSangDialogKey"), remoteSangWarning:$("#remoteSangWarning"),
  supabaseUrlInput:$("#supabaseUrlInput"), supabaseKeyInput:$("#supabaseKeyInput"), testSupabaseConnectionButton:$("#testSupabaseConnectionButton"), testSupabaseStateButton:$("#testSupabaseStateButton"), supabaseAnonymousLoginButton:$("#supabaseAnonymousLoginButton"), createSupabaseWorkspaceButton:$("#createSupabaseWorkspaceButton"), verifySupabaseWorkspaceButton:$("#verifySupabaseWorkspaceButton"), clearSupabaseWorkspaceButton:$("#clearSupabaseWorkspaceButton"), testSupabaseWorkspaceStateButton:$("#testSupabaseWorkspaceStateButton"), createSupabasePairingCodeButton:$("#createSupabasePairingCodeButton"), consumeSupabasePairingCodeButton:$("#consumeSupabasePairingCodeButton"), supabasePairingCodeInput:$("#supabasePairingCodeInput"), supabasePairingCodeOutput:$("#supabasePairingCodeOutput"), supabasePairingExpiresOutput:$("#supabasePairingExpiresOutput"), uploadSupabaseTodaySetlistButton:$("#uploadSupabaseTodaySetlistButton"), previewSupabaseTodaySetlistButton:$("#previewSupabaseTodaySetlistButton"), applySupabaseTodaySetlistButton:$("#applySupabaseTodaySetlistButton"), supabaseTodaySetlistPreview:$("#supabaseTodaySetlistPreview"), supabaseTodaySetlistMeta:$("#supabaseTodaySetlistMeta"), supabaseConnectionStatus:$("#supabaseConnectionStatus"), supabaseStateTestStatus:$("#supabaseStateTestStatus"), supabaseAuthStatus:$("#supabaseAuthStatus"), supabaseWorkspaceStatus:$("#supabaseWorkspaceStatus"), supabasePairingStatus:$("#supabasePairingStatus"), supabaseTodaySetlistStatus:$("#supabaseTodaySetlistStatus"), supabaseTodaySetlistApplyStatus:$("#supabaseTodaySetlistApplyStatus"),
  appInfoVersion:$("#appInfoVersion"), appInfoSongs:$("#appInfoSongs"), appInfoFavorites:$("#appInfoFavorites"), appInfoSingLogs:$("#appInfoSingLogs"), appInfoDrafts:$("#appInfoDrafts"), appInfoStreams:$("#appInfoStreams"),
  diagnosticPanel:$("#diagnosticPanel"), diagnosticContent:$("#diagnosticContent"), diagVersion:$("#diagVersion"), diagSongCount:$("#diagSongCount"), diagSingLogCount:$("#diagSingLogCount"), diagDraftCount:$("#diagDraftCount"), diagTodaySetlistCount:$("#diagTodaySetlistCount")
};

const genreOptions = ["J-POP","ボカロ","アニソン","ゲーム","童謡","歌謡曲"];
const vocalOptions = ["男性ボーカル","女性ボーカル","男女混成"];
const hootoVersion = "0.4.0";
const csvHeaders = ["曲ID","曲名","タイトル読み","アーティスト","歌手名読み","普段使うオケ","キー設定","お気に入り","状態","季節","ジャンル","ボーカル属性","最終歌唱日","歌唱回数","備考"];
const errorLogKey = "hooto-error-logs";

let songs = loadSongs();
let streams = loadStreams();
let todaySetlist = loadSetlist();
let draftSetlists = loadDrafts();
let singLogs = loadSingLogs();
let favoriteFilter = "all";
let specialFilter = "all";
let lastPickType = "random";
let currentPage = 1;
let pageSize = 20;
let pendingDeleteIndex = null;
let pendingDeleteDraftIndex = null;
let pendingSetlistTargetSongId = null;
let pendingBackup = null;
let editingDraftId = null;
let singLogSongFilter = null;
let singRankType = "all";
let pickedSongId = null;
let pickedSongIds = [];
let focusedSongId = null;
let focusedSongExact = null;
let remoteExpandedSetlistIndex = null;
let remoteLogsExpanded = false;
let pendingRemoteSangSongId = null;
let remoteSangSaving = false;
let remoteSangCooldownUntil = 0;
let remoteSangCooldownTimer = null;
let lastRemoteSangFeedback = null;
let remoteFeedbackTimer = null;

function makeId(){return globalThis.crypto?.randomUUID?.()||`song-${Date.now()}-${Math.random().toString(36).slice(2)}`;}
function makeUniqueId(used=new Set()){let id;do{id=makeId();}while(used.has(id));used.add(id);return id;}
function cleanCSVText(value){return String(value??"").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\u00A0/g," ").trim();}
function normalize(value) { return cleanCSVText(value).normalize("NFKC").toLocaleLowerCase("ja").replace(/[\s\u200B-\u200D\uFEFF]/g, ""); }
function normalizedStatus(status){const value=normalize(status);return value==="歌える"||value==="○歌える"||value==="〇歌える"||value==="歌唱済み"?"歌える":value==="練習中"||value==="△練習中"?"練習中":"要確認";}
function normalizeGenres(value){
  const raw=Array.isArray(value)?value:String(value||"").split(/[;；、,|]+/);
  const normalized=raw.map(item=>cleanCSVText(item)).filter(Boolean).map(item=>genreOptions.find(option=>normalize(option)===normalize(item))||item);
  return [...new Set(normalized)].filter(item=>genreOptions.includes(item));
}
function normalizeVocalType(value){
  const text=cleanCSVText(value);
  if(!text)return "";
  return vocalOptions.find(option=>normalize(option)===normalize(text))||"";
}
function normalizeSong(song){
  let karaokes=Array.isArray(song.karaokes)?song.karaokes.filter(Boolean):[];const oldKaraoke=String(song.karaoke||"");if(!karaokes.length&&oldKaraoke){const known=["歌っちゃ王","生音風カラオケ","DAM","JOYSOUND","自作","その他"];karaokes=known.filter(item=>oldKaraoke.includes(item));if(!karaokes.length)karaokes=["その他"];}if(song.utacchaou&&!karaokes.includes("歌っちゃ王"))karaokes.unshift("歌っちゃ王");
  const oldKey=oldKaraoke.match(/(?:^|\s)([+-][1-5])(?:\s|$)/)?.[1];
  return{id:cleanCSVText(song.id||song.songId||makeId()),title:String(song.title||""),titleReading:String(song.titleReading||""),artist:String(song.artist||""),artistReading:String(song.artistReading||""),karaokes:[...new Set(karaokes)],genres:normalizeGenres(song.genres||song.genre),vocalType:normalizeVocalType(song.vocalType||song.vocal||song["ボーカル属性"]),keySetting:String(song.keySetting||oldKey||"原曲"),status:normalizedStatus(song.status||"要確認"),season:song.season||"通年",notes:String(song.notes||"")};
}
function normalizeSongs(list=[]){const used=new Set();return list.map(item=>{const rawId=cleanCSVText(item?.id||item?.songId||"");const song=normalizeSong({...item,id:rawId||makeUniqueId(used)});if(song.id)used.add(song.id);return song;});}
function normalizeSetlistData(data={}){return{date:String(data.date||todayString()),name:String(data.name||data.setlistName||""),streamTitle:String(data.streamTitle||data.title||""),memo:String(data.memo||data.notes||""),songs:Array.isArray(data.songs)?data.songs.map(song=>({id:song.id,title:String(song.title||""),artist:String(song.artist||""),keySetting:String(song.keySetting||""),recordedAt:song.recordedAt})).filter(song=>song.title):[]};}
function normalizeStream(data={}){return normalizeSetlistData(data);}
function normalizeDraft(data={}){const base=normalizeSetlistData(data);return{id:String(data.id||makeId()),name:base.name,streamTitle:base.streamTitle,memo:base.memo,songs:base.songs,createdAt:String(data.createdAt||data.updatedAt||new Date().toISOString()),updatedAt:String(data.updatedAt||data.createdAt||new Date().toISOString())};}
function normalizeSingType(type){return ["配信","カラオケ","練習"].includes(type)?type:"配信";}
function normalizeSingLog(data={}){return{id:String(data.id||makeId()),songId:String(data.songId||""),date:String(data.date||todayString()),recordedAt:String(data.recordedAt||new Date().toISOString()),title:String(data.title||""),artist:String(data.artist||""),type:normalizeSingType(data.type),karaoke:String(data.karaoke||""),memo:String(data.memo||data.notes||"")};}

function loadSongs() {
  try {
    const saved = JSON.parse(localStorage.getItem("hooto-songs") || "null");
    if (Array.isArray(saved)) return normalizeSongs(saved);
  } catch (_) {}
  const oldFavorites = JSON.parse(localStorage.getItem("hooto-favorites") || "{}");
  return normalizeSongs(sampleSongs.map(song => ({...song, favorite:oldFavorites[`${song.title}__${song.artist}`] ?? song.favorite})));
}
function saveSongs() { localStorage.setItem("hooto-songs", JSON.stringify(songs)); }
function loadStreams(){try{const saved=JSON.parse(localStorage.getItem("hooto-streams")||"[]");return Array.isArray(saved)?saved.map(normalizeStream):[];}catch(_){return[];}}
function saveStreams(){localStorage.setItem("hooto-streams",JSON.stringify(streams));}
function loadSetlist(){try{const saved=JSON.parse(localStorage.getItem("hooto-today-setlist")||"null");if(saved?.date===todayString()&&Array.isArray(saved.songs))return normalizeSetlistData(saved);return normalizeSetlistData();}catch(_){return normalizeSetlistData();}}
function saveSetlistData(){localStorage.setItem("hooto-today-setlist",JSON.stringify(todaySetlist));}
function loadDrafts(){try{const saved=JSON.parse(localStorage.getItem("hooto-draft-setlists")||"[]");return Array.isArray(saved)?saved.map(normalizeDraft):[];}catch(_){return[];}}
function saveDrafts(){localStorage.setItem("hooto-draft-setlists",JSON.stringify(draftSetlists));}
function loadSingLogs(){try{const saved=JSON.parse(localStorage.getItem("hooto-sing-logs")||"[]");return Array.isArray(saved)?saved.map(normalizeSingLog).filter(log=>log.title):[];}catch(_){return[];}}
function saveSingLogs(){localStorage.setItem("hooto-sing-logs",JSON.stringify(singLogs));}
function todayString() { const now=new Date(); return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`; }
function normalizeDateString(value){const text=String(value||"").trim();if(!text)return "";const match=text.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);if(match)return `${match[1]}-${match[2].padStart(2,"0")}-${match[3].padStart(2,"0")}`;const date=new Date(text);return Number.isNaN(date.getTime())?text:`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;}
function timeString() { const now=new Date(); return `${String(now.getHours()).padStart(2,"0")}${String(now.getMinutes()).padStart(2,"0")}${String(now.getSeconds()).padStart(2,"0")}`; }
function loadErrorLogs(){try{const logs=JSON.parse(localStorage.getItem(errorLogKey)||"[]");return Array.isArray(logs)?logs.slice(-50):[];}catch(_){return[];}}
function saveErrorLogs(logs){try{localStorage.setItem(errorLogKey,JSON.stringify(logs.slice(-50)));}catch(_){}}
function safeErrorText(value,limit=1200){return String(value??"").replace(/[\r\n\t]+/g," ").slice(0,limit);}
function recordErrorLog(data={}){const entry={time:new Date().toISOString(),type:safeErrorText(data.type||"error",80),message:safeErrorText(data.message||"不�Eなエラー"),filename:safeErrorText(data.filename||"",400),line:Number(data.line)||0,column:Number(data.column)||0,stack:safeErrorText(data.stack||"",2000)};const logs=loadErrorLogs();logs.push(entry);saveErrorLogs(logs);}
window.onerror=(message,source,lineno,colno,error)=>{recordErrorLog({type:"error",message,filename:source,line:lineno,column:colno,stack:error?.stack||""});};
window.addEventListener("unhandledrejection",event=>{const reason=event.reason||{};recordErrorLog({type:"unhandledrejection",message:reason.message||reason,filename:reason.fileName||"",line:reason.lineNumber||0,column:reason.columnNumber||0,stack:reason.stack||""});});
function dateValue(value, fallback) { return value ? new Date(`${value}T00:00:00`).getTime() : fallback; }
function isOverdue(song) {
  if (!song.lastSung) return true;
  const border=new Date(); border.setHours(0,0,0,0); border.setMonth(border.getMonth()-6);
  return dateValue(song.lastSung,0) <= border.getTime();
}
function escapeHTML(value) { return String(value).replace(/[&<>'"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
function colorFor(title) { const colors=["#ff9fbd","#c4a8ff","#ffd888","#91dec2","#87bfff"]; return colors[[...title].reduce((n,c)=>n+c.charCodeAt(0),0)%colors.length]; }
function statusColor(status) { return ({"歌える":"#91dec2","練習中":"#ffd888","要確認":"#c4a8ff"})[status]||"#87bfff"; }
function compareJapanese(a,b){const left=cleanCSVText(a),right=cleanCSVText(b),base=left.localeCompare(right,"ja-JP",{numeric:true,sensitivity:"base"});return base||left.localeCompare(right,"ja-JP",{numeric:true,sensitivity:"variant"});}
function compareByFields(a,b,fields){for(const field of fields){const result=compareJapanese(field(a),field(b));if(result)return result;}return 0;}
function titleSortKey(song){return song.titleReading||song.title;}
function artistSortKey(song){return song.artistReading||song.artist;}
function compareSongsByTitle(a,b){return compareByFields(a,b,[titleSortKey,song=>song.title,artistSortKey,song=>song.artist]);}
function compareSongsByArtist(a,b){return compareByFields(a,b,[artistSortKey,song=>song.artist,titleSortKey,song=>song.title]);}
function formatDate(date) { if(!date) return "まだ歌っていません"; const d=new Date(`${date}T00:00:00`); return Number.isNaN(d.getTime())?date:`${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,"0")}.${String(d.getDate()).padStart(2,"0")}`; }
function csvCell(value){const text=String(value??"");return /[",\r\n]/.test(text)?`"${text.replace(/"/g,'""')}"`:text;}
function downloadFile(filename, content, type){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url;link.download=filename;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function exportSongsCSV(){const rows=songs.map(song=>[song.id,song.title,song.titleReading,song.artist,song.artistReading,song.karaokes.join("、"),song.keySetting,song.favorite?"はい":"いいえ",song.status,song.season,song.genres.join(";"),song.vocalType||"",song.lastSung,song.count,song.notes]);const csv=[csvHeaders,...rows].map(row=>row.map(csvCell).join(",")).join("\r\n");downloadFile(`hooto-songs-${todayString()}.csv`,`\uFEFF${csv}`,"text/csv;charset=utf-8");showToast("曲データCSVを書き出しました！");}
function buildBackup(backupNote=""){return{app:"Hooto - 楽曲管理メモ",version:6,appVersion:hootoVersion,backupNote:String(backupNote||""),exportedAt:new Date().toISOString(),songs:normalizeSongs(songs),todaySetlist:normalizeSetlistData(todaySetlist),streams:Array.isArray(streams)?streams.map(normalizeStream):[],draftSetlists:Array.isArray(draftSetlists)?draftSetlists.map(normalizeDraft):[],singLogs:Array.isArray(singLogs)?singLogs.map(normalizeSingLog):[],theme:loadTheme()};}
function exportBackupJSON(){const backupNote=prompt("バックアップメモを入力できます（空欄でも保存できます）","");if(backupNote===null)return;downloadFile(`Hooto_v${hootoVersion}_${todayString()}_${timeString()}_backup.json`,JSON.stringify(buildBackup(backupNote.trim()),null,2),"application/json;charset=utf-8");showToast("バックアップJSONを保存しました！");}
function normalizeBackup(data){if(!data||typeof data!=="object")throw new Error("バックアップ形式ではありません");const restoredSongs=Array.isArray(data.songs)?normalizeSongs(data.songs).filter(song=>song.title):[];const restoredSetlist=data.todaySetlist&&typeof data.todaySetlist==="object"?normalizeSetlistData(data.todaySetlist):normalizeSetlistData();const restoredStreams=Array.isArray(data.streams)?data.streams.map(normalizeStream):[];const restoredDrafts=Array.isArray(data.draftSetlists)?data.draftSetlists.map(normalizeDraft):[];const restoredSingLogs=Array.isArray(data.singLogs)?data.singLogs.map(normalizeSingLog).filter(log=>log.title):[];const restoredTheme=data.theme&&typeof data.theme==="object"?{mode:data.theme.mode==="light"?"light":"dark",accent:["pink","purple","blue","green","orange"].includes(data.theme.accent)?data.theme.accent:"pink"}:loadTheme();return{songs:restoredSongs,todaySetlist:restoredSetlist,streams:restoredStreams,draftSetlists:restoredDrafts,singLogs:restoredSingLogs,theme:restoredTheme};}
function applyBackup(data){songs=data.songs;todaySetlist=data.todaySetlist;streams=data.streams;draftSetlists=data.draftSetlists||[];singLogs=data.singLogs||[];editingDraftId=null;singLogSongFilter=null;clearFocusedSong();saveSongs();saveSetlistData();saveStreams();saveDrafts();saveSingLogs();applyTheme(data.theme);rebuildStatuses();currentPage=1;favoriteFilter="all";specialFilter="all";els.genre.value="all";els.vocal.value="all";els.favoriteButtons.forEach(button=>button.classList.toggle("active",button.dataset.favorite==="all"));render();renderHistory();renderSetlist();renderDrafts();renderArtists(els.artistSearch.value);renderSingLogs();showView("home");}

function focusedSong(){if(focusedSongId){const found=songById(focusedSongId);if(found)return found;}if(focusedSongExact)return songs.find(song=>song.title===focusedSongExact.title&&song.artist===focusedSongExact.artist);return null;}
function clearFocusedSong(){focusedSongId=null;focusedSongExact=null;if(specialFilter==="song")specialFilter="all";}
function resetFocusedSongForUserFilter(){if(specialFilter==="song")clearFocusedSong();}

function filteredSongs() {
  if(specialFilter==="song"){const song=focusedSong();return song?[song]:[];}
  const query=normalize(els.search.value), status=els.status.value, season=els.season.value, genre=els.genre.value, vocal=els.vocal.value;
  return songs.filter(song => (!query||normalize(song.title).includes(query)||normalize(song.titleReading).includes(query)||normalize(song.artist).includes(query)||normalize(song.artistReading).includes(query)||song.genres.some(item=>normalize(item).includes(query))||normalize(song.vocalType).includes(query)) && (favoriteFilter==="all"||song.favorite) && (status==="all"||song.status===status) && (season==="all"||song.season===season) && (genre==="all"||song.genres.includes(genre)) && (vocal==="all"||song.vocalType===vocal) && (specialFilter!=="overdue"||isOverdue(song))).sort((a,b)=>{
    switch(els.sort.value){case"last-asc":return dateValue(a.lastSung,Infinity)-dateValue(b.lastSung,Infinity)||compareSongsByTitle(a,b);case"count-desc":return b.count-a.count||compareSongsByTitle(a,b);case"count-asc":return a.count-b.count||compareSongsByTitle(a,b);case"title":return compareSongsByTitle(a,b);default:return dateValue(b.lastSung,0)-dateValue(a.lastSung,0)||compareSongsByTitle(a,b);}
  });
}

function render() {
  const visible=filteredSongs();
  const totalPages=Math.max(1,Math.ceil(visible.length/pageSize));
  currentPage=Math.min(currentPage,totalPages);
  const pageSongs=visible.slice((currentPage-1)*pageSize,currentPage*pageSize);
  els.count.textContent=`${visible.length} songs`;
  els.empty.hidden=visible.length!==0;
  els.grid.hidden=visible.length===0;
  els.pagination.hidden=visible.length===0;
  els.overdueCount.textContent=songs.filter(isOverdue).length;
  els.streamCount.textContent=streams.length;
  els.draftCount.textContent=draftSetlists.length;
  els.singLogCount.textContent=singLogs.length;
  els.setlistTopCount.textContent=todaySetlist.songs.length;
  els.artistCount.textContent=new Set(songs.map(song=>song.artist).filter(Boolean)).size;
  els.listTitle.textContent=specialFilter==="overdue"?"半年以上歌っていない":specialFilter==="song"?"選択した曲":"マイソング";
  els.clearSpecial.hidden=specialFilter==="all";
  renderStats();renderAppInfo();renderRemoteView();
  els.message.textContent=specialFilter==="song"?"曲IDで1曲だけ表示中":visible.length===songs.length?"あなたの歌える曲リスト":`${songs.length}曲中 ${visible.length}曲を表示中`;
  els.pageStatus.innerHTML=`<strong>${currentPage}</strong><i>/</i><span>${totalPages}</span>`;
  els.prevPage.disabled=currentPage===1;
  els.nextPage.disabled=currentPage===totalPages;
  const seasonOptions=["春","夏","秋","冬","通年"];
  els.grid.innerHTML=pageSongs.map(song=>{
    const index=songs.indexOf(song);
    return `<article class="song-card" style="--card-color:${colorFor(song.title)}">
      <div class="card-top"><div class="song-info"><h3 class="song-title" title="${escapeHTML(song.title)}">${escapeHTML(song.title)}</h3><p class="artist">${escapeHTML(song.artist)}</p></div><button type="button" class="favorite-button ${song.favorite?"is-favorite":""}" data-action="favorite" data-index="${index}" aria-label="${escapeHTML(song.title)}を${song.favorite?"お気に入りから外す":"お気に入りに追加"}" aria-pressed="${song.favorite}">${song.favorite?"♥":"♡"}</button></div>
      <div class="card-tags"><span class="status" style="--status-color:${statusColor(song.status)}">${escapeHTML(song.status)}</span><label class="season-picker"><span>${seasonIcon(song.season)}</span><select data-action="season" data-index="${index}" aria-label="${escapeHTML(song.title)}の季節">${seasonOptions.map(option=>`<option value="${option}" ${song.season===option?"selected":""}>${option}</option>`).join("")}</select></label></div>
      <div class="genre-tags">${song.genres.length?song.genres.map(item=>`<span>${escapeHTML(item)}</span>`).join(""):"<span class=\"no-genre\">ジャンル未設定</span>"}</div>
      <div class="song-detail-chips"><span class="key-chip">KEY ${escapeHTML(song.keySetting)}</span>${song.vocalType?`<span class="vocal-chip">${escapeHTML(song.vocalType)}</span>`:""}${song.karaokes.map(item=>`<span>♬ ${escapeHTML(item)}</span>`).join("")}${song.notes?"<span class=\"memo-chip\">📝 メモあり</span>":""}</div>
      <div class="card-meta"><div class="meta-item"><span class="meta-label">LAST SING</span><span class="meta-value">${escapeHTML(formatDate(song.lastSung))}</span></div><div class="meta-item"><span class="meta-label">SING COUNT</span><span class="meta-value">${song.count} 回</span></div></div>
      <div class="card-links manage-only"><button type="button" data-action="song-log" data-index="${index}">履歴</button><button type="button" data-action="edit" data-index="${index}">✎ 編集</button><button type="button" data-action="delete" data-index="${index}">削除</button></div>
      <div class="card-cta"><button type="button" class="setlist-add-button" data-action="setlist" data-index="${index}">＋ セトリに追加</button><button type="button" class="sang-button" data-action="sang" data-index="${index}"><span>♪</span> 歌った！</button></div>
    </article>`;
  }).join("");
}

function renderStats(){const count=status=>songs.filter(song=>song.status===status).length;$("#statTotal").textContent=songs.length;$("#statSingable").textContent=count("歌える");$("#statPractice").textContent=count("練習中");$("#statCheck").textContent=count("要確認");$("#statFavorite").textContent=songs.filter(song=>song.favorite).length;$("#statOverdue").textContent=songs.filter(isOverdue).length;}
function renderAppInfo(){if(!els.appInfoVersion)return;els.appInfoVersion.textContent=hootoVersion;els.appInfoSongs.textContent=songs.length;els.appInfoFavorites.textContent=songs.filter(song=>song.favorite).length;els.appInfoSingLogs.textContent=singLogs.length;els.appInfoDrafts.textContent=draftSetlists.length;els.appInfoStreams.textContent=streams.length;updateDiagnosticSummary();}
function remoteSetlistProgress(setlistSongs){
  const today=todayString(),completed=new Set();
  singLogs.filter(log=>log.date===today&&log.type==="配信").forEach(log=>{
    const index=setlistSongs.findIndex(song=>(log.songId&&song.id&&log.songId===song.id)||(!log.songId&&song.title===log.title&&song.artist===log.artist));
    if(index>=0)completed.add(index);
  });
  const lastCompleted=completed.size?Math.max(...completed):-1;
  const nextIndex=lastCompleted+1<setlistSongs.length?lastCompleted+1:-1;
  return{completed,nextIndex,hasProgress:completed.size>0,remaining:Math.max(0,setlistSongs.length-completed.size)};
}
function remoteSongInSetlist(song,setlistSongs){
  return setlistSongs.some(item=>(song.id&&item.id&&song.id===item.id)||(!song.id&&item.title===song.title&&item.artist===song.artist));
}
function currentRemoteNextSong(){
  const setlistSongs=Array.isArray(todaySetlist?.songs)?todaySetlist.songs:[];
  const progress=remoteSetlistProgress(setlistSongs);
  return progress.nextIndex>=0?setlistSongs[progress.nextIndex]:null;
}
function hasTodayStreamLog(songId){
  if(!songId)return false;
  const today=todayString();
  return singLogs.some(log=>log.date===today&&log.songId===songId&&log.type==="配信");
}
function openRemoteSangDialogForSong(song){
  if(!song){showToast("記録する曲が見つかりません");return;}
  pendingRemoteSangSongId=song.id||null;
  if(!pendingRemoteSangSongId){showToast("記録する曲IDが見つかりません");return;}
  const duplicated=hasTodayStreamLog(song.id),confirmButton=$("#confirmRemoteSang");
  if(confirmButton)confirmButton.textContent=duplicated?"もう一度記録する":"歌ったことにする";
  els.remoteSangDialogTitle.textContent=song.title;
  els.remoteSangDialogArtist.textContent=song.artist||"アーティスト未設定";
  els.remoteSangDialogKey.textContent=song.keySetting?`KEY ${song.keySetting}`:"KEY -";
  if(els.remoteSangWarning){
    els.remoteSangWarning.hidden=false;
    els.remoteSangWarning.classList.toggle("is-warning",duplicated);
    els.remoteSangWarning.classList.toggle("is-ok",!duplicated);
    els.remoteSangWarning.textContent=duplicated?"今日すでに配信で記録されています。二重登録に注意してください。":"本日未記録です。";
  }
  els.remoteSangDialog.showModal();
}
function remoteSangCooldownActive(){return Date.now()<remoteSangCooldownUntil;}
function startRemoteSangCooldown(duration=2500){
  remoteSangSaving=false;
  remoteSangCooldownUntil=Date.now()+duration;
  if(remoteSangCooldownTimer)clearTimeout(remoteSangCooldownTimer);
  renderRemoteView();
  remoteSangCooldownTimer=setTimeout(()=>{
    remoteSangCooldownUntil=0;
    remoteSangCooldownTimer=null;
    renderRemoteView();
  },duration);
}
function setRemoteSangFeedback(recordedTitle,nextSong,duration=4500){
  lastRemoteSangFeedback={recordedTitle:String(recordedTitle||""),nextTitle:nextSong?.title||""};
  if(remoteFeedbackTimer)clearTimeout(remoteFeedbackTimer);
  remoteFeedbackTimer=setTimeout(()=>{
    lastRemoteSangFeedback=null;
    remoteFeedbackTimer=null;
    renderRemoteView();
  },duration);
}
function remoteLogDateLabel(date){
  const match=String(date||"").match(/^\d{4}[-/](\d{1,2})[-/](\d{1,2})/);
  return match?`${match[1].padStart(2,"0")}.${match[2].padStart(2,"0")}`:formatDate(date);
}
function renderRemoteView(){
  if(!els.remoteView)return;
  const setlistSongs=Array.isArray(todaySetlist?.songs)?todaySetlist.songs:[];
  if(remoteExpandedSetlistIndex!==null&&remoteExpandedSetlistIndex>=setlistSongs.length)remoteExpandedSetlistIndex=null;
  const progress=remoteSetlistProgress(setlistSongs);
  els.remoteSetlistCount.textContent=`${setlistSongs.length}曲`;
  const currentLabel=progress.hasProgress?`${progress.nextIndex>=0?progress.nextIndex+1:setlistSongs.length} / ${setlistSongs.length}`:"未確認";
  els.remoteSetlistSummary.innerHTML=`<div><strong>${setlistSongs.length}</strong><small>全曲</small></div><div><strong>${progress.completed.size}</strong><small>仮完了</small></div><div><strong>${progress.remaining}</strong><small>残り</small></div><div><strong>${currentLabel}</strong><small>位置（仮）</small></div>`;
  const remoteFeedback=$("#remoteSangFeedback");
  if(remoteFeedback){
    remoteFeedback.hidden=!lastRemoteSangFeedback;
    remoteFeedback.innerHTML=lastRemoteSangFeedback?`<strong>記録しました：${escapeHTML(lastRemoteSangFeedback.recordedTitle)}</strong><span>${lastRemoteSangFeedback.nextTitle?`次：${escapeHTML(lastRemoteSangFeedback.nextTitle)}`:"次の候補はありません"}</span>`:"";
  }
  els.remoteSetlistEmpty.hidden=setlistSongs.length!==0;
  els.remoteSetlistList.hidden=setlistSongs.length===0;
  if(els.remoteCommitSetlist)els.remoteCommitSetlist.disabled=setlistSongs.length===0;
  els.remoteSetlistList.innerHTML=setlistSongs.map((song,index)=>{
    const statusText=progress.completed.has(index)?"仮完了":index===progress.nextIndex?"次の候補":"";
    const expanded=remoteExpandedSetlistIndex===index;
    const keyText=song.keySetting?`KEY ${song.keySetting}`:"KEY -";
    const latestSong=song.id?songById(song.id):null;
    const countText=latestSong?`${Number(latestSong.count)||0}回`:"";
    const countBadge=countText?`<em class="remote-setlist-count">${escapeHTML(countText)}</em>`:"";
    const sangButton=expanded?`<button type="button" class="remote-setlist-sang-button" data-remote-action="sang-this" data-remote-setlist-index="${index}">この曲を歌った！</button>`:"";
    return `<li class="${progress.completed.has(index)?"is-readonly-done":index===progress.nextIndex?"is-readonly-next":""} ${expanded?"is-expanded":""}" data-remote-setlist-index="${index}" role="button" tabindex="0" aria-expanded="${expanded}" title="${escapeHTML(song.title)} / ${escapeHTML(song.artist||"")} / ${escapeHTML(keyText)}"><b>${index+1}</b><span class="remote-setlist-line"><strong>${escapeHTML(song.title)}</strong><small>${escapeHTML(song.artist||"")}</small><em>${escapeHTML(keyText)}</em>${countBadge}${statusText?`<i>${escapeHTML(statusText)}</i>`:""}${sangButton}</span></li>`;
  }).join("");
  const today=todayString();
  const recentLogs=[...singLogs].sort((a,b)=>(b.recordedAt||b.date).localeCompare(a.recordedAt||a.date));
  const visibleLogs=remoteLogsExpanded?recentLogs:recentLogs.slice(0,5);
  els.remoteLogCount.textContent=`${recentLogs.length}件`;
  els.remoteLogEmpty.hidden=recentLogs.length!==0;
  els.remoteLogList.hidden=recentLogs.length===0;
  if(els.remoteLogToggle){
    els.remoteLogToggle.hidden=recentLogs.length<=5;
    els.remoteLogToggle.textContent=remoteLogsExpanded?"履歴を折りたたむ":`履歴をもっと見る（あと${recentLogs.length-5}件）`;
    els.remoteLogToggle.setAttribute("aria-expanded",String(remoteLogsExpanded));
  }
  els.remoteLogList.innerHTML=visibleLogs.map(log=>{
    const isToday=log.date===today;
    return `<article class="${isToday?"is-today-log":""}" title="${escapeHTML(`${formatDate(log.date)} / ${log.title} / ${log.artist} / ${log.type}`)}"><span class="remote-log-date">${escapeHTML(remoteLogDateLabel(log.date))}</span><span class="remote-log-type">${escapeHTML(log.type)}</span><b>${escapeHTML(log.title)}</b><small>${escapeHTML(log.artist)}</small>${isToday?'<em>今日</em>':""}</article>`;
  }).join("");
  const picked=pickedSongIds.length?pickedSongIds.map(id=>songById(id)).filter(Boolean):(pickedSongId?[songById(pickedSongId)].filter(Boolean):[]);
  els.remoteRandomResult.innerHTML=picked.length?picked.map((song,index)=>{
    const inSetlist=remoteSongInSetlist(song,setlistSongs);
    return `<article class="${inSetlist?"is-in-setlist":""}"><span>${picked.length>1?`候補${index+1}`:"最新候補"}</span><strong>${escapeHTML(song.title)}</strong><small>${escapeHTML(song.artist)}${song.status?` ・ ${escapeHTML(song.status)}`:""}${inSetlist?" ・ セトリ追加済み":""}</small></article>`;
  }).join(""):`<article class="remote-random-empty"><span>待機中</span><strong>ランダム結果はまだありません</strong><small>PC画面でランダム選曲すると、ここに候補が表示されます。</small></article>`;
}
function updateDiagnosticSummary(){if(!els.diagVersion)return;els.diagVersion.textContent=hootoVersion;els.diagSongCount.textContent=songs.length;els.diagSingLogCount.textContent=singLogs.length;els.diagDraftCount.textContent=draftSetlists.length;els.diagTodaySetlistCount.textContent=todaySetlist.songs.length;}
function diagnoseDateText(value){
  const text=String(value??"").trim();
  if(!text)return{ok:true,reason:"未歌唱"};
  const match=text.match(/^(\d{4})([-/])(\d{1,2})\2(\d{1,2})$/);
  if(!match)return{ok:false,reason:"形式が不正です。YYYY-MM-DD または YYYY/MM/DD を使用してください"};
  const year=Number(match[1]),month=Number(match[3]),day=Number(match[4]);
  if(!Number.isInteger(year)||!Number.isInteger(month)||!Number.isInteger(day))return{ok:false,reason:"数値ではありません"};
  if(month<1||month>12||day<1||day>31)return{ok:false,reason:"存在しない日付です"};
  const date=new Date(year,month-1,day);
  if(date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day)return{ok:false,reason:"存在しない日付です"};
  const today=new Date();today.setHours(23,59,59,999);
  if(date.getTime()>today.getTime())return{ok:false,reason:"未来日です"};
  return{ok:true,reason:"正常"};
}
function setlistMissingIdIssues(label,setlist,knownIds){return (setlist?.songs||[]).filter(item=>item.id&&!knownIds.has(item.id)).map(item=>`${label}: ${item.title||"(曲名なし)"} / ${item.artist||"(アーティストなし)"} / ${item.id}`);}
function runDataDiagnostics(){
  const issues=[],knownIds=new Set(songs.map(song=>song.id).filter(Boolean)),duplicateMap=new Map();
  songs.forEach((song,index)=>{
    const label=`${index+1}. ${song.title||"(曲名なし)"} / ${song.artist||"(アーティストなし)"}`;
    if(!String(song.title||"").trim())issues.push(`曲タイトルが空です: ${index+1}行目`);
    if(!String(song.artist||"").trim())issues.push(`アーティスト名が空です: ${song.title||index+1}`);
    if(!["歌える","練習中","要確認"].includes(song.status))issues.push(`状態が想定外です: ${label} => ${song.status||"(空)"}`);
    if(song.vocalType&&!vocalOptions.includes(song.vocalType))issues.push(`vocalType が想定外です: ${label} => ${song.vocalType}`);
    if(!Number.isFinite(Number(song.count)))issues.push(`歌唱回数が数値ではありません: ${label} => ${song.count}`);
    const dateDiagnosis=diagnoseDateText(song.lastSung);
    if(!dateDiagnosis.ok)issues.push(`最終歌唱日が不正です（${dateDiagnosis.reason}）: ${label} => ${song.lastSung}`);
    const key=`${normalize(song.title)}__${normalize(song.artist)}`;
    if(key!=="__")duplicateMap.set(key,[...(duplicateMap.get(key)||[]),label]);
  });
  duplicateMap.forEach(items=>{if(items.length>1)issues.push(`同じ「曲名＋アーティスト名」が重複しています: ${items.join(" / ")}`);});
  setlistMissingIdIssues("今日のセトリ",todaySetlist,knownIds).forEach(issue=>issues.push(`存在しないID: ${issue}`));
  streams.forEach((stream,index)=>setlistMissingIdIssues(`過去セトリ ${stream.date||index+1}`,stream,knownIds).forEach(issue=>issues.push(`存在しないID: ${issue}`)));
  draftSetlists.forEach((draft,index)=>setlistMissingIdIssues(`セトリ案 ${draft.name||index+1}`,draft,knownIds).forEach(issue=>issues.push(`存在しないID: ${issue}`)));
  return issues;
}
function storageDisplayItems(){const map=[["hooto-songs","曲データ"],["hooto-today-setlist","今日のセトリ"],["hooto-draft-setlists","セトリ案"],["hooto-streams","配信履歴"],["hooto-sing-logs","歌唱履歴"],["hooto-theme","テーマ設定"],[errorLogKey,"診断エラーログ"]],keys=new Set(Object.keys(localStorage));return{known:map.map(([key,label])=>({key,label,exists:keys.has(key)})),unknown:[...keys].filter(key=>!map.some(([known])=>known===key)).sort()};}
function songLabel(song){return `${song.title||"(曲名なし)"} / ${song.artist||"(アーティストなし)"}`;}
function renderSimpleDetails(title,items,empty="該当なし"){if(!items.length)return`<div class="diagnostic-mini"><strong>${escapeHTML(title)}</strong><small>${escapeHTML(empty)}</small></div>`;if(items.length<=8)return`<div class="diagnostic-mini"><strong>${escapeHTML(title)}（${items.length}件）</strong><ul>${items.map(item=>`<li>${escapeHTML(item)}</li>`).join("")}</ul></div>`;return`<details class="diagnostic-fold"><summary>${escapeHTML(title)}（${items.length}件）</summary><ul>${items.map(item=>`<li>${escapeHTML(item)}</li>`).join("")}</ul></details>`;}
function diagnosticListBody(items){return items.length?`<ul>${items.map(item=>`<li>${escapeHTML(item)}</li>`).join("")}</ul>`:"<small>該当なし</small>";}
function renderSongDateTreeBody(list){return diagnosticListBody(list.map(songLabel));}
function renderWarningToggle(title,count,body){return`<details class="diagnostic-warning-toggle"><summary><strong>${escapeHTML(count)}</strong><small>${escapeHTML(title)}</small></summary><div>${body}</div></details>`;}
function relativeDiagnosticTime(date=new Date()){const time=`${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;return `${formatDate(date.toISOString().slice(0,10))} ${time}`;}
function recommendedActions(report,hasErrors){const actions=[];if(hasErrors)actions.push(["!","異常項目を先に確認・修正してください"]);if(report.warnings.vocalUnset.length)actions.push(["Vo","vocalTypeを設定すると検索しやすくなります"]);if(report.warnings.genreUnset.length)actions.push(["#","ジャンルを設定すると絞り込みが便利になります"]);if(report.warnings.overdue.length)actions.push(["↺","半年以上歌っていない曲を確認すると選曲の幅が広がります"]);if(!actions.length)actions.push(["✓","大きな問題はありません。定期的にバックアップを保存しておくと安心です"]);return actions;}
function buildDiagnosticReport(){const logs=loadErrorLogs(),errors=runDataDiagnostics(),vocalUnset=songs.filter(song=>!song.vocalType),genreUnset=songs.filter(song=>!song.genres?.length),overdue=songs.filter(isOverdue),storage=storageDisplayItems();return{info:[["総曲数",songs.length],["お気に入り数",songs.filter(song=>song.favorite).length],["今日のセトリ曲数",todaySetlist.songs.length],["セトリ案数",draftSetlists.length],["歌唱履歴件数",singLogs.length],["過去セトリ数",streams.length],["アプリバージョン",hootoVersion]],warnings:{vocalUnset,genreUnset,overdue},errors,logs,storage};}
function diagnosticText(){const report=buildDiagnosticReport();return [`Hooto 診断結果`,`【情報】`,...report.info.map(([label,value])=>`- ${label}: ${value}`),`保存データ: ${report.storage.known.filter(item=>item.exists).map(item=>item.label).join(", ")||"なし"}`,`【注意】`,`- vocalType未設定: ${report.warnings.vocalUnset.length}件`,`- ジャンル未設定: ${report.warnings.genreUnset.length}件`,`- 半年以上歌っていない曲: ${report.warnings.overdue.length}件`,`【異常】`,report.errors.length?`${report.errors.length}件`:"問題は見つかりませんでした",...report.errors.map(issue=>`- ${issue}`),`【最近のエラーログ】`,report.logs.length?`${report.logs.length}件`:"記録なし",...report.logs.slice(-10).map(log=>`- [${log.time}] ${log.type}: ${log.message} ${log.filename?`(${log.filename}:${log.line}:${log.column})`:""}`)].join("\n");}
function resetDiagnosticResults(){ensureDiagnosticSection();updateDiagnosticSummary();if(els.diagnosticContent)els.diagnosticContent.innerHTML='<div class="debug-block"><strong>診断結果をリセットしました</strong><small>画面上の診断結果だけを消去しました。曲データ・履歴・セトリ・設定には影響ありません。「診断を実行」で再表示できます。</small></div>';showToast("診断結果をリセットしました");}
function renderDiagnostics(){ensureDiagnosticSection();if(!els.diagnosticContent)return;updateDiagnosticSummary();if(els.diagnosticPanel)els.diagnosticPanel.open=true;const report=buildDiagnosticReport(),warningTypes=[report.warnings.vocalUnset,report.warnings.genreUnset,report.warnings.overdue].filter(items=>items.length>0).length,hasErrors=report.errors.length>0,summaryIcon=hasErrors?"🔴":warningTypes?"🟡":"🟢",summaryText=hasErrors?"異常あり":warningTypes?"注意あり":"システム正常",diagnosedAt=new Date();els.diagnosticContent.innerHTML=`<div class="diagnostic-result-layout"><section class="diagnostic-summary ${hasErrors?"danger":warningTypes?"caution":"ok"}"><div><span>${summaryIcon}</span><strong>${summaryText}</strong><button id="runDiagnosticInlineButton" class="diagnostic-inline-run" type="button"><i>↻</i>診断を実行</button><small>最終診断 ${escapeHTML(relativeDiagnosticTime(diagnosedAt))}</small></div><dl><div><dt>異常</dt><dd>${report.errors.length}件</dd></div><div><dt>注意項目</dt><dd>${warningTypes}種類</dd></div></dl><div class="diagnostic-recommend"><b><i>i</i> 推奨アクション</b><ul>${recommendedActions(report,hasErrors).map(([icon,text])=>`<li><span>${escapeHTML(icon)}</span><em>${escapeHTML(text)}</em></li>`).join("")}</ul></div></section><section class="diagnostic-card info"><h3>情報</h3><div class="diagnostic-info-grid">${report.info.map(([label,value])=>`<div><strong>${escapeHTML(value)}</strong><small>${escapeHTML(label)}</small></div>`).join("")}</div><details class="diagnostic-storage"><summary>保存データ</summary><ul>${report.storage.known.map(item=>`<li class="${item.exists?"ok":"missing"}">${item.exists?"✓":"-"} ${escapeHTML(item.label)}</li>`).join("")}</ul></details></section><section class="diagnostic-card warn"><h3>注意（要確認）</h3><div class="diagnostic-counts">${renderWarningToggle("vocalType未設定",report.warnings.vocalUnset.length,diagnosticListBody(report.warnings.vocalUnset.map(songLabel)))}${renderWarningToggle("ジャンル未設定",report.warnings.genreUnset.length,diagnosticListBody(report.warnings.genreUnset.map(songLabel)))}${renderWarningToggle("半年以上歌っていない曲",report.warnings.overdue.length,renderSongDateTreeBody(report.warnings.overdue))}</div></section><section class="diagnostic-card error ${report.errors.length?"has-error":"is-ok"}"><h3>${report.errors.length?"異常（要修正）":"🟢 異常なし"}</h3>${report.errors.length?renderSimpleDetails("不正データ",report.errors):'<p class="diagnostic-ok">不正データは見つかりませんでした。</p>'}</section><section class="diagnostic-card logs ${report.logs.length?"has-error":""}"><h3>最近のエラーログ</h3>${report.logs.length?renderSimpleDetails("JavaScriptエラー",report.logs.slice(-10).reverse().map(log=>`[${log.time}] ${log.type}: ${log.message}${log.filename?` (${log.filename}:${log.line}:${log.column})`:""}`)):'<p class="diagnostic-ok">記録されたJavaScriptエラーはありません。</p>'}</section></div>`;}
async function copyText(text,successMessage){try{await navigator.clipboard.writeText(text);showToast(successMessage);}catch(_){const area=document.createElement("textarea");area.value=text;document.body.append(area);area.select();document.execCommand("copy");area.remove();showToast(successMessage);}}
function bindDiagnosticEls(){Object.assign(els,{diagnosticPanel:$("#diagnosticPanel"),diagnosticContent:$("#diagnosticContent"),diagVersion:$("#diagVersion"),diagSongCount:$("#diagSongCount"),diagSingLogCount:$("#diagSingLogCount"),diagDraftCount:$("#diagDraftCount"),diagTodaySetlistCount:$("#diagTodaySetlistCount")});}
function ensureDiagnosticSection(){const settings=els.settingsTabView||$("#settingsTabView");if(!settings)return;let section=document.querySelector(".diagnostic-section");const appInfo=settings.querySelector(".app-info-section");if(section){section.hidden=false;section.style.display="";if(appInfo&&appInfo.nextElementSibling!==section)appInfo.insertAdjacentElement("afterend",section);bindDiagnosticEls();return;}const html=`<section class="settings-section diagnostic-section"><div class="settings-section-head"><span class="settings-icon">🩺</span><div><h2>診断</h2><p>エラーログと保存データの状態を確認します。不具合報告やデータ破損確認に使えます。</p></div></div><div class="diagnostic-actions"><details class="diagnostic-more-actions"><summary>その他操作</summary><div class="diagnostic-more-grid"><button id="copyErrorLogsButton" class="settings-action-card" type="button"><span>⧉</span><strong>エラーログをコピー</strong><small>最近のエラーだけコピー</small></button><button id="copyDiagnosticButton" class="settings-action-card" type="button"><span>⧉</span><strong>診断結果をコピー</strong><small>データ診断結果をコピー</small></button><button id="clearErrorLogsButton" class="settings-action-card danger-soft" type="button"><span>×</span><strong>エラーログを消去</strong><small>診断ログのみ削除</small></button><button id="resetDiagnosticButton" class="settings-action-card danger-soft" type="button"><span>↺</span><strong>診断結果をリセット</strong><small>画面上の診断結果のみ消去</small></button></div></details></div><div class="diagnostic-grid"><div><small>アプリバージョン</small><strong id="diagVersion">-</strong></div><div><small>総曲数</small><strong id="diagSongCount">0</strong></div><div><small>歌唱履歴件数</small><strong id="diagSingLogCount">0</strong></div><div><small>セトリ案数</small><strong id="diagDraftCount">0</strong></div><div><small>今日のセトリ曲数</small><strong id="diagTodaySetlistCount">0</strong></div></div><details id="diagnosticPanel" class="csv-debug-panel settings-debug-panel diagnostic-panel" open><summary><span>🩺</span><strong>状態ダッシュボード</strong><small>Hootoの保存状態をまとめて確認します</small><i>⌄</i></summary><div id="diagnosticContent" class="csv-debug-content"></div></details></section>`;if(appInfo)appInfo.insertAdjacentHTML("afterend",html);else settings.insertAdjacentHTML("beforeend",html);bindDiagnosticEls();}
function connectDiagnosticButtons(){ensureDiagnosticSection();els.diagnosticContent?.addEventListener("click",event=>{if(event.target.closest("#runDiagnosticInlineButton")){renderDiagnostics();els.diagnosticPanel.open=true;showToast("診断を実行しました");}});$("#copyErrorLogsButton")?.addEventListener("click",()=>{const logs=loadErrorLogs();copyText(logs.length?logs.map(log=>`[${log.time}] ${log.type}: ${log.message}\n${log.filename?`${log.filename}:${log.line}:${log.column}\n`:""}${log.stack||""}`).join("\n\n"):"エラーログはありません。","エラーログをコピーしました");});$("#clearErrorLogsButton")?.addEventListener("click",()=>{if(!confirm("JavaScriptエラーログを消去します。曲データは削除されません。よろしいですか？"))return;localStorage.removeItem(errorLogKey);renderDiagnostics();showToast("エラーログを消去しました");});$("#copyDiagnosticButton")?.addEventListener("click",()=>copyText(diagnosticText(),"診断結果をコピーしました"));$("#resetDiagnosticButton")?.addEventListener("click",resetDiagnosticResults);}
function rebuildStatuses(){const current=els.status.value;const values=["歌える","練習中","要確認"];els.status.innerHTML='<option value="all">すべての状態</option>'+values.map(v=>`<option value="${v}">${v}</option>`).join("");if(values.includes(current))els.status.value=current;}
function seasonIcon(season){return({"春":"🌸","夏":"☀","秋":"🍁","冬":"❄","通年":"◇"})[season]||"◇";}
function showToast(message){els.toast.textContent=message;els.toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>els.toast.classList.remove("show"),2600);}
function renderCsvDebug(debug){
  if(!els.csvDebugPanel||!els.csvDebugContent)return;
  els.csvDebugPanel.hidden=false;els.csvDebugPanel.open=true;
  const warning=debug.warning||debug.statusIndex<0||debug.songIdDuplicateCount>0;
  els.csvDebugContent.innerHTML=`<div class="debug-block ${warning?"debug-warning":""}"><strong>状態列</strong><small>${warning?"⚠ ":""}${escapeHTML(debug.statusColumnMessage)}</small></div><div class="debug-block ${debug.songIdDuplicateCount>0?"debug-warning":""}"><strong>曲ID</strong><small>${debug.hasSongIdColumn?"あり":"なし"}${debug.songIdHeader?`（${escapeHTML(debug.songIdHeader)}）`:""} / IDあり ${debug.songIdCount} / ID欠損 ${debug.songIdMissingCount} / ID重複 ${debug.songIdDuplicateCount}${debug.songIdDuplicateCount>0?" ⚠ 曲ID重複あり":""}</small></div><div class="debug-block ${debug.songIdDuplicateCount>0?"debug-warning":""}"><strong>重複ID一覧</strong><small>${debug.duplicateSongIds?.length?debug.duplicateSongIds.map(id=>`<code>${escapeHTML(id)}</code>`).join(" / "):"重複なし"}</small></div><div class="debug-block"><strong>読み込んだ見出し</strong><small>${debug.rawHeaders.map(header=>`<code>${escapeHTML(header||"(空)")}</code>`).join(" / ")}</small></div><div class="debug-block"><strong>正規化後の見出し</strong><small>${debug.headers.map(header=>`<code>${escapeHTML(header||"(空)")}</code>`).join(" / ")}</small></div><div class="debug-block"><strong>状態件数</strong><small>歌える ${debug.finalStatusCounts["歌える"]||0} / 練習中 ${debug.finalStatusCounts["練習中"]||0} / 要確認 ${debug.finalStatusCounts["要確認"]||0}</small></div><div class="debug-block"><strong>状態列の実値サンプル</strong><small>${debug.statusSamples.map(sample=>`<code>${escapeHTML(sample.raw||"(空)")}</code>`).join(" / ")||"サンプルなし"}</small></div><div class="debug-block"><strong>状態列の読み取りサンプル</strong><ul>${debug.statusSamples.map(sample=>`<li>行${sample.row}: 実値 <code>${escapeHTML(sample.raw||"(空)")}</code> → 正規化 <code>${escapeHTML(sample.normalized||"(空)")}</code> → 変換 <code>${escapeHTML(sample.mapped)}</code></li>`).join("")||"<li>サンプルなし</li>"}</ul></div>`;
}
function addToTodayStream(song){
  const date=todayString();let stream=streams.find(item=>item.date===date);
  if(!stream){stream=normalizeStream({date,songs:[]});streams.push(stream);}
  stream.songs.push({title:song.title,artist:song.artist,recordedAt:new Date().toISOString()});saveStreams();
}
function recordSingLog(song,{type="配信",karaoke="",memo=""}={}){
  const singType=normalizeSingType(type);
  const log=normalizeSingLog({songId:song.id,date:todayString(),recordedAt:new Date().toISOString(),title:song.title,artist:song.artist,type:singType,karaoke,memo});
  singLogs.unshift(log);saveSingLogs();
  if(singType==="配信"){
    song.count+=1;
    song.lastSung=todayString();
    song.status="歌える";
    addToTodayStream(song);
    saveSongs();
    rebuildStatuses();
  }
  render();renderSingLogs();return log;
}
function completeSongById(songId,options={}){
  const song=songById(songId);
  if(!song){showToast("曲が見つかりません");return null;}
  return recordSingLog(song,options);
}
function openSingRecord(index){
  const song=songs[index];if(!song)return;
  els.singRecordSongIndex.value=String(index);
  els.singRecordSongLabel.textContent=`${song.title} / ${song.artist}`;
  els.singRecordType.value="配信";
  els.singRecordMemo.value="";
  const options=(song.karaokes.length?song.karaokes:["未設定"]).map(item=>`<option>${escapeHTML(item)}</option>`).join("")+'<option>その他</option>';
  els.singRecordKaraoke.innerHTML=options;
  els.singRecordDialog.showModal();
}
function closeSingRecord(){els.singRecordDialog.close();els.singRecordForm.reset();}
function renderSingAnalytics(){
  const monthKey=todayString().slice(0,7),monthLogs=singLogs.filter(log=>log.date?.slice(0,7)===monthKey);
  els.logStatMonthTotal.textContent=monthLogs.length;
  els.logStatMonthStream.textContent=monthLogs.filter(log=>log.type==="配信").length;
  els.logStatMonthKaraoke.textContent=monthLogs.filter(log=>log.type==="カラオケ").length;
  els.logStatMonthPractice.textContent=monthLogs.filter(log=>log.type==="練習").length;
  els.logStatAll.textContent=singLogs.length;
  const rankingSource=singRankType==="all"?singLogs:singLogs.filter(log=>log.type===singRankType),rankMap=new Map();
  rankingSource.forEach(log=>{const key=log.songId||`${log.title}__${log.artist}`;const item=rankMap.get(key)||{title:log.title,artist:log.artist,count:0};item.count+=1;rankMap.set(key,item);});
  const ranking=[...rankMap.values()].sort((a,b)=>b.count-a.count||a.title.localeCompare(b.title,"ja")).slice(0,10);
  els.singRankingList.innerHTML=ranking.length?ranking.map((item,index)=>`<article><b>${index+1}</b><span><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.artist)}</small></span><em>${item.count}回</em></article>`).join(""):'<p class="analysis-empty">ランキングに表示できる歌唱履歴がありません</p>';
  const recent=[...singLogs].sort((a,b)=>(b.recordedAt||b.date).localeCompare(a.recordedAt||a.date)).slice(0,8);
  els.recentSingCount.textContent=`${recent.length} songs`;
  els.recentSingList.innerHTML=recent.length?recent.map(log=>`<article><span><strong>${escapeHTML(formatDate(log.date))}</strong><small>${escapeHTML(log.type)}</small></span><div><b>${escapeHTML(log.title)}</b><small>${escapeHTML(log.artist)} ・ オケ：${escapeHTML(log.karaoke||"未設定")}</small></div></article>`).join(""):'<p class="analysis-empty">最近歌った曲はまだありません</p>';
}
function renderSingLogs(){
  const query=normalize(els.singLogSearch?.value||""),typeFilter=els.singLogTypeFilter?.value||"all";
  const filtered=singLogs.filter(log=>(!singLogSongFilter||log.songId===singLogSongFilter)&&(typeFilter==="all"||log.type===typeFilter)&&(!query||normalize(log.title).includes(query)||normalize(log.artist).includes(query)||normalize(log.memo).includes(query)||normalize(log.type).includes(query)||normalize(log.karaoke).includes(query))).sort((a,b)=>(b.recordedAt||b.date).localeCompare(a.recordedAt||a.date));
  renderSingAnalytics();
  els.singLogCount.textContent=singLogs.length;
  els.singLogArchiveCount.textContent=`${filtered.length} logs`;
  els.singLogEmpty.hidden=filtered.length!==0;
  els.singLogList.hidden=filtered.length===0;
  const target=songs.find(song=>song.id===singLogSongFilter);
  els.singLogTitle.textContent=target?`「${target.title}」の歌唱履歴`:"すべての歌唱履歴";
  els.singLogList.innerHTML=filtered.map(log=>`<article class="sing-log-card"><div class="sing-log-date"><strong>${escapeHTML(formatDate(log.date))}</strong><small>${escapeHTML(log.type)}</small></div><div class="sing-log-main"><strong>${escapeHTML(log.title)}</strong><small>${escapeHTML(log.artist)}</small><div><span>オケ：${escapeHTML(log.karaoke||"未設定")}</span>${log.memo?`<span>メモ：${escapeHTML(log.memo)}</span>`:""}</div><div class="sing-log-actions"><button type="button" class="delete-sing-log-button" data-sing-log-action="delete" data-sing-log-id="${escapeHTML(log.id)}">この履歴を削除</button></div></div></article>`).join("");
}
function deleteSingLogById(logId){
  const index=singLogs.findIndex(log=>log.id===logId);
  if(index<0)return;
  const log=singLogs[index],date=normalizeDateString(log.date)||log.date||"日付未設定",type=normalizeSingType(log.type),title=log.title||"曲名未設定";
  if(!confirm(`「${title}」 ${date} の歌唱履歴を削除します。\n配信履歴の場合、曲の歌唱回数を1減らし、必要に応じて最終歌唱日を見直します。\nCSV由来の過去回数は自動判別できないため、完全再計算は行いません。\nよろしいですか？`))return;
  singLogs.splice(index,1);
  let songChanged=false;
  if(type==="配信"){
    const song=log.songId?songs.find(item=>item.id===log.songId):songs.find(item=>item.title===log.title&&item.artist===log.artist);
    if(song){
      song.count=Math.max(0,Number(song.count||0)-1);
      songChanged=true;
      const deletedDate=normalizeDateString(log.date),currentLast=normalizeDateString(song.lastSung);
      if(deletedDate&&currentLast&&deletedDate===currentLast){
        const sameSongLogs=singLogs.filter(item=>item.type==="配信"&&(log.songId?item.songId===log.songId:(item.title===log.title&&item.artist===log.artist)));
        const latest=sameSongLogs.map(item=>normalizeDateString(item.date)).filter(Boolean).sort((a,b)=>dateValue(b,0)-dateValue(a,0))[0];
        if(latest)song.lastSung=latest;
        else if(Number(song.count||0)===0)song.lastSung="";
      }
    }
  }
  saveSingLogs();
  if(songChanged){saveSongs();rebuildStatuses();}
  renderSingLogs();
  render();
  showToast("歌唱履歴を削除しました");
}
function formatStreamDate(date){const d=new Date(`${date}T00:00:00`);return Number.isNaN(d.getTime())?date:new Intl.DateTimeFormat("ja-JP",{year:"numeric",month:"long",day:"numeric",weekday:"short"}).format(d);}
function formatDate(date) { if(!date) return "まだ歌っていません"; const d=new Date(`${date}T00:00:00`); return Number.isNaN(d.getTime())?date:`${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,"0")}.${String(d.getDate()).padStart(2,"0")}`; }
function renderHistory(){
  streams=streams.map(normalizeStream);
  const ordered=[...streams].sort((a,b)=>normalizeDateString(b.date).localeCompare(normalizeDateString(a.date)));
  els.streamCount.textContent=streams.length;
  els.archiveCount.textContent=`${streams.length} streams`;
  els.historyEmpty.hidden=ordered.length!==0;
  els.historyList.innerHTML=ordered.map(stream=>{
    const index=streams.indexOf(stream),name=stream.name||"名称未設定",title=stream.streamTitle||"配信タイトル未設定",memo=stream.memo||"",memoLabel=memo?` / メモ：${memo}`:"";
    return `<details class="stream-card"><summary><span class="stream-date-icon">♫</span><span><strong>${escapeHTML(formatStreamDate(stream.date))}</strong><em>${escapeHTML(name)}</em><small>${escapeHTML(title)} / ${stream.songs.length} songs${escapeHTML(memoLabel)}</small></span><i>⌄</i></summary><div class="stream-detail"><dl><div><dt>日付</dt><dd>${escapeHTML(formatStreamDate(stream.date))}</dd></div><div><dt>セトリ名</dt><dd>${escapeHTML(name)}</dd></div><div><dt>配信タイトル</dt><dd>${escapeHTML(title)}</dd></div><div><dt>メモ</dt><dd>${escapeHTML(stream.memo||"メモなし")}</dd></div></dl><div class="stream-actions"><button class="duplicate-setlist-button" data-stream-action="duplicate" data-index="${index}" type="button">今日のセトリに複製</button><button class="delete-stream-button" data-stream-action="delete" data-index="${index}" type="button">このアーカイブを削除</button></div></div><ol>${stream.songs.length?stream.songs.map((song,index)=>`<li><b>${index+1}</b><span><strong>${escapeHTML(song.title)}</strong><small>${escapeHTML(song.artist)}${song.keySetting&&song.keySetting!=="原曲"?` ・ KEY ${escapeHTML(song.keySetting)}`:""}</small></span></li>`).join(""):'<li class="no-setlist">この日のセトリはまだ空です</li>'}</ol></details>`;
  }).join("");
}
function setlistText(){return todaySetlist.songs.map((song,index)=>`${index+1}. ${song.title}`).join("\n");}
function syncSetlistFields(){todaySetlist.name=els.setlistName.value.trim();todaySetlist.streamTitle=els.setlistStreamTitle.value.trim();todaySetlist.memo=els.setlistMemo.value.trim();saveSetlistData();}
function confirmCommitSetlist(){
  if(!todaySetlist.songs.length){showToast("セトリに曲を追加してください");return false;}
  const hasExisting=streams.some(item=>item.date===todaySetlist.date);
  const message=hasExisting?"今日の日付には既存の保存メモがあります。\n現在の仕様では、同じ日付のメモを更新します。\n曲の歌唱回数・最終歌唱日はここでは更新しません。\nよろしいですか？":"今日のセトリを保存メモに保存します。\n曲の歌唱回数・最終歌唱日はここでは更新しません。\nよろしいですか？";
  return confirm(message);
}
function handleCommitSetlistRequest(event){if(event){event.preventDefault();event.stopPropagation();event.stopImmediatePropagation?.();}if(!confirmCommitSetlist())return;const saved=commitSetlist();if(!saved)return;clearTodaySetlistAfterCommit();}
function renderSetlist(){
  todaySetlist=normalizeSetlistData(todaySetlist);
  els.setlistCount.textContent=todaySetlist.songs.length;
  els.setlistTopCount.textContent=todaySetlist.songs.length;
  els.setlistEmpty.hidden=todaySetlist.songs.length!==0;
  $("#setlistDateLabel").textContent=formatStreamDate(todaySetlist.date);
  els.setlistName.value=todaySetlist.name;
  els.setlistStreamTitle.value=todaySetlist.streamTitle;
  els.setlistMemo.value=todaySetlist.memo;
  const editingDraft=draftSetlists.find(draft=>draft.id===editingDraftId);
  els.draftEditNotice.hidden=!editingDraft;
  els.draftEditName.textContent=editingDraft?draftName(editingDraft):"";
  $("#updateDraftSetlist").hidden=!editingDraft;
  $("#saveDraftSetlist").hidden=!!editingDraft;
  els.setlistList.innerHTML=todaySetlist.songs.map((song,index)=>`<li><b>${index+1}</b><span><strong>${escapeHTML(song.title)}</strong><small>${escapeHTML(song.artist)}${song.keySetting&&song.keySetting!=="原曲"?` ・ KEY ${escapeHTML(song.keySetting)}`:""}</small></span><div><button type="button" data-setlist-action="up" data-index="${index}" aria-label="${escapeHTML(song.title)}を上へ" ${index===0?"disabled":""}>↑</button><button type="button" data-setlist-action="down" data-index="${index}" aria-label="${escapeHTML(song.title)}を下へ" ${index===todaySetlist.songs.length-1?"disabled":""}>↓</button><button type="button" data-setlist-action="remove" data-index="${index}" aria-label="${escapeHTML(song.title)}を削除">×</button></div></li>`).join("");
}
function addToSetlist(song){todaySetlist.songs.push({id:song.id,title:song.title,artist:song.artist,keySetting:song.keySetting});saveSetlistData();renderSetlist();render();showToast(`「${song.title}」をセトリに追加しました`);}
function setlistSongItem(song){return{id:song.id,title:song.title,artist:song.artist,keySetting:song.keySetting};}
function renderSetlistTargetDrafts(){if(!els.setlistTargetDraftList)return;const hasDrafts=draftSetlists.length>0;els.setlistTargetDraftEmpty.hidden=hasDrafts;els.setlistTargetDraftList.innerHTML=draftSetlists.map(draft=>`<button type="button" data-draft-target="${escapeHTML(draft.id)}"><strong>${escapeHTML(draftName(draft))}</strong><small>${escapeHTML(draft.streamTitle||"配信タイトル未設定")} ・ ${draft.songs.length}曲</small></button>`).join("");}
function openSetlistTargetDialog(songId,source="song-card"){const song=songById(songId);if(!song){showToast("曲が見つかりません");return;}pendingSetlistTargetSongId=song.id;els.setlistTargetSongTitle.textContent=song.title;els.setlistTargetSongArtist.textContent=song.artist||"アーティスト未設定";els.setlistTargetNewDraftName.value="";renderSetlistTargetDrafts();els.setlistTargetDialog.showModal();}
function closeSetlistTargetDialog(){pendingSetlistTargetSongId=null;els.setlistTargetDialog.close();}
function addPendingSongToTodaySetlist(){const song=songById(pendingSetlistTargetSongId);if(!song){showToast("追加する曲が見つかりません");closeSetlistTargetDialog();return;}addToSetlist(song);closeSetlistTargetDialog();}
function addSongToDraftById(draftId,songId){const draft=draftSetlists.find(item=>item.id===draftId),song=songById(songId);if(!draft||!song){showToast("セトリ案または曲が見つかりません");return null;}draft.songs.push(setlistSongItem(song));draft.updatedAt=new Date().toISOString();saveDrafts();renderDrafts();render();return draft;}
function createDraftWithSong(songId,name=""){const song=songById(songId);if(!song){showToast("曲が見つかりません");return null;}const now=new Date().toISOString(),draft=normalizeDraft({id:makeId(),name:name||`${song.title} から作成`,streamTitle:name||"",memo:"",songs:[setlistSongItem(song)],createdAt:now,updatedAt:now});draftSetlists.unshift(draft);saveDrafts();renderDrafts();render();return draft;}
function commitSetlist(){syncSetlistFields();if(!todaySetlist.songs.length){showToast("セトリに曲を追加してください");return false;}let stream=streams.find(item=>item.date===todaySetlist.date);const snapshot=todaySetlist.songs.map(song=>({title:song.title,artist:song.artist,keySetting:song.keySetting,recordedAt:new Date().toISOString()}));const payload=normalizeStream({...todaySetlist,songs:snapshot});if(stream)Object.assign(stream,payload);else streams.push(payload);saveStreams();renderHistory();render();showToast("今日のセトリを過去の保存メモに保存しました");return true;}
function clearTodaySetlistAfterCommit(){todaySetlist=normalizeSetlistData({date:todayString(),songs:[]});editingDraftId=null;remoteExpandedSetlistIndex=null;pendingRemoteSangSongId=null;saveSetlistData();renderSetlist();renderRemoteView();render();}
function duplicateStreamToToday(index){const stream=streams[index];if(!stream)return;todaySetlist=normalizeSetlistData({...stream,date:todayString(),songs:stream.songs.map(song=>({...song}))});saveSetlistData();renderSetlist();render();showView("setlist");showToast("過去のセトリを今日のセトリに複製しました");}
function deleteStreamArchive(index){const stream=streams[index];if(!stream)return;const name=stream.name||stream.streamTitle||"名称未設定",date=normalizeDateString(stream.date)||stream.date||"";if(!confirm(`「${name}」 ${date} の保存メモを削除します。\n曲の歌唱回数・最終歌唱日は変更されません。\nよろしいですか？`))return;streams.splice(index,1);saveStreams();renderHistory();render();showToast("保存メモを削除しました");}
function draftName(draft){return draft.name||"名称未設定";}
function setTodayFromDraft(draft,editing=false){todaySetlist=normalizeSetlistData({...draft,date:todayString(),songs:draft.songs.map(song=>({...song}))});editingDraftId=editing?draft.id:null;saveSetlistData();renderSetlist();render();showView("setlist");}
function saveCurrentAsDraft(update=false){syncSetlistFields();if(!todaySetlist.songs.length){showToast("セトリに曲を追加してください");return;}const now=new Date().toISOString();if(update&&editingDraftId){const draft=draftSetlists.find(item=>item.id===editingDraftId);if(!draft){editingDraftId=null;showToast("更新するセトリ案が見つかりません");renderSetlist();return;}Object.assign(draft,normalizeDraft({...todaySetlist,id:draft.id,createdAt:draft.createdAt,updatedAt:now}));showToast("セトリ案を更新しました");}else{draftSetlists.unshift(normalizeDraft({...todaySetlist,id:makeId(),createdAt:now,updatedAt:now}));showToast("セトリ案に保存しました");}saveDrafts();renderDrafts();render();}
function useDraft(index){const draft=draftSetlists[index];if(!draft)return;setTodayFromDraft(draft,false);showToast("セトリ案を今日のセトリに読み込みました");}
function editDraft(index){const draft=draftSetlists[index];if(!draft)return;setTodayFromDraft(draft,true);showToast("セトリ案を編集モードで開きました");}
function duplicateDraft(index){const draft=draftSetlists[index];if(!draft)return;const now=new Date().toISOString();draftSetlists.unshift(normalizeDraft({...draft,id:makeId(),name:`${draftName(draft)} コピー`,createdAt:now,updatedAt:now}));saveDrafts();renderDrafts();render();showToast("セトリ案を複製しました");}
function deleteDraft(index){const draft=draftSetlists[index];if(!draft)return;pendingDeleteDraftIndex=index;els.deleteDraftName.textContent=`「${draftName(draft)}」 / ${draft.streamTitle||"配信タイトル未設定"}`;els.deleteDraftDialog.showModal();}
function renderDrafts(){draftSetlists=draftSetlists.map(normalizeDraft).sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt));els.draftCount.textContent=draftSetlists.length;els.draftArchiveCount.textContent=`${draftSetlists.length} ideas`;els.draftEmpty.hidden=draftSetlists.length!==0;els.draftList.innerHTML=draftSetlists.map((draft,index)=>`<details class="draft-card"><summary><span class="stream-date-icon">✦</span><span><strong>${escapeHTML(draftName(draft))}</strong><em>${escapeHTML(draft.streamTitle||"配信タイトル未設定")}</em><small>${draft.songs.length} songs ・ 更新 ${escapeHTML(formatDateTime(draft.updatedAt))}</small></span><i>⌄</i></summary><div class="stream-detail draft-detail"><dl><div><dt>セトリ案名</dt><dd>${escapeHTML(draftName(draft))}</dd></div><div><dt>配信タイトル</dt><dd>${escapeHTML(draft.streamTitle||"配信タイトル未設定")}</dd></div><div><dt>曲数</dt><dd>${draft.songs.length} 曲</dd></div><div><dt>更新日</dt><dd>${escapeHTML(formatDateTime(draft.updatedAt))}</dd></div><div class="wide"><dt>メモ</dt><dd>${escapeHTML(draft.memo||"メモなし")}</dd></div></dl><div class="draft-actions"><button type="button" data-draft-action="use" data-index="${index}" class="primary">今日のセトリに使う</button><button type="button" data-draft-action="edit" data-index="${index}">編集</button><button type="button" data-draft-action="duplicate" data-index="${index}">複製</button><button type="button" data-draft-action="delete" data-index="${index}" class="danger">削除</button></div></div><ol>${draft.songs.length?draft.songs.map((song,i)=>`<li><b>${i+1}</b><span><strong>${escapeHTML(song.title)}</strong><small>${escapeHTML(song.artist)}${song.keySetting&&song.keySetting!=="原曲"?` ・ KEY ${escapeHTML(song.keySetting)}`:""}</small></span></li>`).join(""):'<li class="no-setlist">曲が入っていません</li>'}</ol></details>`).join("");}
function artistBulkVocalValue(items){const values=[...new Set(items.map(song=>song.vocalType||""))];return values.length===1?values[0]:null;}
function renderArtists(query=""){const normalizedQuery=normalize(query),openArtists=new Set([...els.artistList.querySelectorAll(".artist-card[open] summary strong")].map(item=>item.textContent));const groups=new Map();songs.forEach(song=>{if(!groups.has(song.artist))groups.set(song.artist,[]);groups.get(song.artist).push(song);});const entries=[...groups.entries()].filter(([artist,items])=>!normalizedQuery||normalize(artist).includes(normalizedQuery)||items.some(song=>normalize(song.artistReading).includes(normalizedQuery))).sort((a,b)=>compareSongsByArtist(a[1][0],b[1][0]));els.artistCount.textContent=groups.size;els.artistEmpty.hidden=entries.length!==0;els.artistList.innerHTML=entries.map(([artist,items])=>{const bulkValue=artistBulkVocalValue(items);return `<details class="artist-card" ${openArtists.has(artist)?"open":""}><summary><span class="artist-avatar">${escapeHTML([...artist][0]||"♪")}</span><span><strong>${escapeHTML(artist)}</strong><small>${items.length}曲</small></span><i>⌄</i></summary><div><div class="artist-vocal-bulk"><div><strong>ボーカル属性を一括設定</strong><small>同じアーティスト名の曲にまとめて反映</small></div><label><span class="sr-only">${escapeHTML(artist)}のボーカル属性</span><select data-artist-vocal-select="${escapeHTML(artist)}">${bulkValue===null?'<option value="__keep" selected>選択してください（現在は混在）</option>':""}<option value="" ${bulkValue===""?"selected":""}>未設定に戻す</option>${vocalOptions.map(option=>`<option value="${escapeHTML(option)}" ${bulkValue===option?"selected":""}>${escapeHTML(option)}</option>`).join("")}</select></label><button data-artist-vocal-apply="${escapeHTML(artist)}" type="button">適用</button></div>${items.sort(compareSongsByTitle).map(song=>`<article><span><strong>${escapeHTML(song.title)}</strong><small>${escapeHTML(song.status)} ・ KEY ${escapeHTML(song.keySetting)}${song.vocalType?` ・ ${escapeHTML(song.vocalType)}`:" ・ ボーカル未設定"}</small></span><div class="artist-row-actions"><button type="button" data-artist-song="${escapeHTML(song.id)}">一覧で見る</button><button type="button" data-artist-edit="${escapeHTML(song.id)}" class="subtle-edit">編集</button></div></article>`).join("")}</div></details>`}).join("");}
function setBottomTabActive(tab){els.bottomTabs.forEach(button=>{const active=button.dataset.bottomTab===tab;button.classList.toggle("active",active);button.setAttribute("aria-current",active?"page":"false");});}
function hideTabPlaceholders(){els.songsTabView.hidden=true;els.logsTabView.hidden=true;els.settingsTabView.hidden=true;}
function updateRemoteModeButton(){if(!els.remoteModeButton)return;const remote=document.body.dataset.uiMode==="remote",icon=els.remoteModeButton.querySelector("span"),label=els.remoteModeButton.querySelector("b");if(icon)icon.textContent=remote?"💻":"📱";if(label)label.textContent=remote?"PC":"リモコン";els.remoteModeButton.setAttribute("aria-label",remote?"PC管理画面へ戻る":"リモコン画面へ切り替え");}
function showView(view){document.body.dataset.uiMode="desktop";updateRemoteModeButton();if(els.remoteView)els.remoteView.hidden=true;if(view==="singLogs"){showMainTab("logs");return;}hideTabPlaceholders();setBottomTabActive(view==="artists"?"songs":"home");els.songView.hidden=view!=="home";els.historyView.hidden=view!=="history";els.setlistView.hidden=view!=="setlist";els.draftsView.hidden=view!=="drafts";els.artistsView.hidden=view!=="artists";if(view==="history")renderHistory();if(view==="setlist")renderSetlist();if(view==="drafts")renderDrafts();if(view==="artists")renderArtists(els.artistSearch.value);window.scrollTo({top:0,behavior:"smooth"});}
function showMainTab(tab){document.body.dataset.uiMode="desktop";updateRemoteModeButton();if(els.remoteView)els.remoteView.hidden=true;if(tab==="home"){showView("home");return;}els.songView.hidden=true;els.historyView.hidden=true;els.setlistView.hidden=true;els.draftsView.hidden=true;els.artistsView.hidden=true;els.songsTabView.hidden=tab!=="songs";els.logsTabView.hidden=tab!=="logs";els.settingsTabView.hidden=tab!=="settings";if(tab==="logs")renderSingLogs();if(tab==="settings"){renderAppInfo();renderDiagnostics();}setBottomTabActive(tab);window.scrollTo({top:0,behavior:"smooth"});}
function hideDesktopViews(){[els.songView,els.historyView,els.setlistView,els.draftsView,els.artistsView,els.songsTabView,els.logsTabView,els.settingsTabView].forEach(view=>{if(view)view.hidden=true;});}
function showRemoteMode(){renderRemoteView();hideDesktopViews();document.body.dataset.uiMode="remote";els.remoteView.hidden=false;updateRemoteModeButton();window.scrollTo({top:0,behavior:"smooth"});}
function showDesktopMode(){document.body.dataset.uiMode="desktop";els.remoteView.hidden=true;showView("home");updateRemoteModeButton();}
function toggleRemoteMode(){document.body.dataset.uiMode==="remote"?showDesktopMode():showRemoteMode();}
function openRemoteSettings(){const panel=$("#remoteSettingsPanel");if(!panel)return;panel.open=true;panel.scrollIntoView({behavior:"smooth",block:"start"});}
function shouldOpenRemoteMode(){return new URLSearchParams(location.search).get("mode")==="remote";}
function openSongForm(index=null){const editing=index!==null;const song=editing?songs[index]:normalizeSong({status:"歌える",season:"通年",vocalType:"女性ボーカル"});$("#songIndex").value=editing?String(index):"";$("#songFormTitle").textContent=editing?"曲を編集":"曲を追加";$("#formEyebrow").textContent=editing?"EDIT SONG":"NEW SONG";$("#fieldTitle").value=song.title;$("#fieldTitleReading").value=song.titleReading;$("#fieldArtist").value=song.artist;$("#fieldArtistReading").value=song.artistReading;document.querySelectorAll('input[name="karaokes"]').forEach(input=>input.checked=song.karaokes.includes(input.value));document.querySelectorAll('input[name="genres"]').forEach(input=>input.checked=song.genres.includes(input.value));$("#fieldVocalType").value=song.vocalType||"";$("#fieldKeySetting").value=song.keySetting;$("#fieldStatus").value=song.status;$("#fieldFavorite").checked=song.favorite;$("#fieldCount").value=String(song.count);$("#fieldLastSung").value=song.lastSung;$("#fieldSeason").value=song.season;$("#fieldNotes").value=song.notes;els.songDialog.showModal();}
function openSongFormById(songId){const index=songs.findIndex(song=>song.id===songId);if(index<0){showToast("編集する曲が見つかりません");return;}openSongForm(index);}
function closeSongForm(){els.songDialog.close();els.songForm.reset();}
function songFromForm(){const rawIndex=$("#songIndex").value;return normalizeSong({id:rawIndex!==""?songs[Number(rawIndex)].id:undefined,title:$("#fieldTitle").value.trim(),titleReading:$("#fieldTitleReading").value.trim(),artist:$("#fieldArtist").value.trim(),artistReading:$("#fieldArtistReading").value.trim(),karaokes:[...document.querySelectorAll('input[name="karaokes"]:checked')].map(input=>input.value),genres:[...document.querySelectorAll('input[name="genres"]:checked')].map(input=>input.value),vocalType:$("#fieldVocalType").value,keySetting:$("#fieldKeySetting").value,status:$("#fieldStatus").value,favorite:$("#fieldFavorite").checked,count:$("#fieldCount").value,lastSung:$("#fieldLastSung").value,season:$("#fieldSeason").value,notes:$("#fieldNotes").value.trim()});}
function randomConditions(){return{status:els.randomStatus.value,genre:els.randomGenre.value,vocal:els.randomVocal.value,karaoke:els.randomKaraoke.value,count:Math.max(1,Number(els.randomCount.value)||1),favorite:els.randomFavoriteOnly.checked,overdue:els.randomOverdueOnly.checked};}
function matchesRandomConditions(song,conditions){return(conditions.status==="all"||song.status===conditions.status)&&(conditions.genre==="all"||song.genres.includes(conditions.genre))&&(conditions.vocal==="all"||song.vocalType===conditions.vocal)&&(conditions.karaoke==="all"||song.karaokes.includes(conditions.karaoke))&&(!conditions.favorite||song.favorite)&&(!conditions.overdue||isOverdue(song));}
function pickReason(song,conditions,type){if(!song)return[];const reasons=[song.status,song.vocalType,...song.genres.slice(0,2),...song.karaokes.slice(0,2)];if(type==="favorite"||song.favorite||conditions.favorite)reasons.push("お気に入り");if(isOverdue(song)||conditions.overdue)reasons.push("半年以上歌っていない");return [...new Set(reasons)].filter(Boolean);}
function setPickActionsEnabled(enabled){[els.pickAddSetlist,els.pickAddDraft,els.pickShowSong].forEach(button=>button.disabled=!enabled);}
function currentPickedSong(){return songs.find(song=>song.id===pickedSongId);}
function shuffleSongs(items){return [...items].sort(()=>Math.random()-.5);}
function pickCandidateAddedToSetlist(id){return todaySetlist.songs.some(item=>item.id===id);}
function renderPickCandidates(picks,conditions,type,useList=false){els.pickCandidateList.hidden=!useList;els.pickCandidateList.innerHTML=useList?picks.map(song=>{const added=pickCandidateAddedToSetlist(song.id);return`<article class="pick-candidate-card ${added?"is-added-to-setlist":""}" data-candidate-song-id="${escapeHTML(song.id)}"><div class="pick-candidate-main"><strong title="${escapeHTML(song.title)}">${escapeHTML(song.title)}</strong><span>/</span><small title="${escapeHTML(song.artist)}">${escapeHTML(song.artist)}</small><em class="pick-candidate-added-note" ${added?"":"hidden"}>今日のセトリに追加済み</em></div><div class="pick-reason">${pickReason(song,conditions,type).map(reason=>`<span>${escapeHTML(reason)}</span>`).join("")}</div><div class="pick-candidate-actions"><button type="button" data-pick-action="setlist" data-song-id="${escapeHTML(song.id)}" ${added?"disabled":""}>${added?"追加済み":"今日のセトリに追加"}</button><button type="button" data-pick-action="draft" data-song-id="${escapeHTML(song.id)}">セトリ案に追加</button><button type="button" data-pick-action="show" data-song-id="${escapeHTML(song.id)}">曲カードを見る</button></div></article>`;}).join(""):"";}
function markPickCandidateAdded(button){const card=button.closest(".pick-candidate-card");if(!card)return;card.classList.add("is-added-to-setlist");const setlistButton=card.querySelector('button[data-pick-action="setlist"]');if(setlistButton){setlistButton.textContent="追加済み";setlistButton.disabled=true;}const note=card.querySelector(".pick-candidate-added-note");if(note)note.hidden=false;}
function pickSong(type){lastPickType=type;const conditions=randomConditions();const requestedCount=type==="favorite"?1:conditions.count;const basePool=type==="favorite"?songs.filter(song=>song.favorite):songs.filter(song=>matchesRandomConditions(song,conditions));const pool=basePool.filter(song=>!todaySetlist.songs.some(item=>item.id===song.id));pickedSongId=null;pickedSongIds=[];els.pickKind.textContent=type==="favorite"?"FAVORITE ROULETTE":"OWL'S RANDOM PICK";els.pickLead.textContent=type==="favorite"?"推し曲から選ぶなら…":requestedCount>1?"候補曲はこちら！":"今夜の一曲は…";els.randomConditionPanel.hidden=type==="favorite";els.randomPoolCount.textContent=type==="favorite"?`${pool.length} favorites`:`条件一致 ${pool.length} 曲`;els.pickReason.innerHTML="";els.pickCandidateList.innerHTML="";els.pickCandidateList.hidden=true;els.pickEmptyHint.hidden=true;setPickActionsEnabled(false);document.querySelector(".pick-result-actions").hidden=false;if(!els.dialog.open)els.dialog.showModal();if(!pool.length){els.pickedTitle.textContent="条件に合う曲がありません";els.pickedArtist.textContent="条件を減らすか、別のジャンル・オケを選んでみてください";els.pickEmptyHint.hidden=false;els.dialog.classList.remove("is-spinning");showToast(type==="favorite"?"お気に入りの曲がありません":"条件に合う曲がありません");return;}const picks=shuffleSongs(pool).slice(0,requestedCount);pickedSongIds=picks.map(song=>song.id);pickedSongId=picks[0]?.id||null;els.pickedTitle.textContent="抽選中";els.pickedArtist.textContent="";els.dialog.classList.add("is-spinning");setTimeout(()=>{const useList=requestedCount>1;if(!useList){const song=picks[0];els.pickedTitle.textContent=song.title;els.pickedArtist.textContent=song.artist;els.pickReason.innerHTML=pickReason(song,conditions,type).map(reason=>`<span>${escapeHTML(reason)}</span>`).join("");setPickActionsEnabled(true);document.querySelector(".pick-result-actions").hidden=false;}else{els.pickedTitle.textContent=`${picks.length}曲の候補を選びました`;els.pickedArtist.textContent="気になる曲をセトリへ入れてください";els.pickReason.innerHTML="";setPickActionsEnabled(false);document.querySelector(".pick-result-actions").hidden=true;}renderPickCandidates(picks,conditions,type,useList);renderRemoteView();els.dialog.classList.remove("is-spinning");},650);}
function songById(id){return songs.find(song=>song.id===id);}
function addSongIdToSetlist(id){const song=songById(id);if(!song){showToast("曲が見つかりません");return;}if(todaySetlist.songs.some(item=>item.id===song.id)){showToast("この曲はすでに今日のセトリに入っています");return;}addToSetlist(song);}
function showSongCardById(id,fallback={}){const song=id?songById(id):null,exact=!song&&fallback.title&&fallback.artist?songs.find(item=>item.title===fallback.title&&item.artist===fallback.artist):null,target=song||exact;if(!target){showToast("曲が見つかりません");return;}if(els.dialog.open)els.dialog.close();specialFilter="song";focusedSongId=target.id||id||null;focusedSongExact={title:target.title,artist:target.artist};favoriteFilter="all";els.favoriteButtons.forEach(button=>button.classList.toggle("active",button.dataset.favorite==="all"));els.search.value="";els.status.value="all";els.season.value="all";els.genre.value="all";els.vocal.value="all";currentPage=1;showMainTab("songs");render();setTimeout(()=>document.querySelector(".collection").scrollIntoView({behavior:"smooth"}),50);}
function addPickedToSetlist(){const song=currentPickedSong();if(!song){showToast("選んだ曲を確認してください");return;}addSongIdToSetlist(song.id);}
function addPickedToDraft(){const song=currentPickedSong();if(!song){showToast("選んだ曲を確認してください");return;}if(els.dialog.open)els.dialog.close();openSetlistTargetDialog(song.id,"random");}
function showPickedSongCard(){const song=currentPickedSong();if(!song){showToast("先に曲を抽選してください");return;}showSongCardById(song.id);}
const themeAccentChoices=["pink","purple","blue","green","orange"];
const themePresets={
  "default-dark":{mode:"dark",accent:"orange",metaColor:"#15121c"},
  "hooto-orange-dark":{mode:"dark",accent:"orange",metaColor:"#171008"},
  "hooto-mint-light":{mode:"light",accent:"green",metaColor:"#effcf4"},
  "hooto-green-dark":{mode:"dark",accent:"green",metaColor:"#08120d"},
  "hooto-orange-light":{mode:"light",accent:"orange",metaColor:"#fff4df"},
  "hooto-blue-dark":{mode:"dark",accent:"blue",metaColor:"#08111f"}
};
function normalizeTheme(theme={}){
  const preset=theme.preset==="custom"?"custom":themePresets[theme.preset]?theme.preset:"default-dark",presetTheme=themePresets[preset]||{};
  const mode=theme.mode==="light"||theme.mode==="dark"?theme.mode:presetTheme.mode||"dark";
  const accent=themeAccentChoices.includes(theme.accent)?theme.accent:presetTheme.accent||"orange";
  return{mode,accent,preset};
}
function loadTheme(){try{return normalizeTheme(JSON.parse(localStorage.getItem("hooto-theme"))||{preset:"default-dark"});}catch(_){return normalizeTheme({preset:"default-dark"});}}
function applyTheme(theme){const normalized=normalizeTheme(theme);document.documentElement.dataset.mode=normalized.mode;document.documentElement.dataset.accent=normalized.accent;if(normalized.preset==="custom")document.documentElement.removeAttribute("data-theme-preset");else document.documentElement.dataset.themePreset=normalized.preset;document.querySelector('meta[name="theme-color"]').content=themePresets[normalized.preset]?.metaColor||(normalized.mode==="dark"?"#171420":"#fff8fb");document.querySelectorAll("[data-mode-choice]").forEach(b=>b.classList.toggle("active",b.dataset.modeChoice===normalized.mode));document.querySelectorAll("[data-accent-choice]").forEach(b=>b.classList.toggle("active",b.dataset.accentChoice===normalized.accent));document.querySelectorAll("[data-theme-preset]").forEach(b=>b.classList.toggle("active",b.dataset.themePreset===normalized.preset));const themeIcon=els.themeButton?.querySelector("span");if(themeIcon)themeIcon.textContent=normalized.mode==="dark"?"☾":"☀";localStorage.setItem("hooto-theme",JSON.stringify(normalized));renderAppInfo();}
function toggleThemePanel(force){if(!els.themePanel||!els.themeButton)return;const open=force??els.themePanel.hidden;els.themePanel.hidden=!open;els.themeButton.setAttribute("aria-expanded",String(open));}
function setSupabaseConnectionStatus(message,type="idle"){
  if(!els.supabaseConnectionStatus)return;
  els.supabaseConnectionStatus.textContent=message;
  els.supabaseConnectionStatus.className=`supabase-connection-status is-${type}`;
}
function setSupabaseStateTestStatus(message,type="idle"){
  if(!els.supabaseStateTestStatus)return;
  els.supabaseStateTestStatus.textContent=message;
  els.supabaseStateTestStatus.className="supabase-connection-status is-"+type;
}
function setSupabaseAuthStatus(message,type="idle"){
  if(!els.supabaseAuthStatus)return;
  els.supabaseAuthStatus.textContent=message;
  els.supabaseAuthStatus.className="supabase-connection-status is-"+type;
}
function setSupabaseWorkspaceStatus(message,type="idle"){
  if(!els.supabaseWorkspaceStatus)return;
  els.supabaseWorkspaceStatus.textContent=message;
  els.supabaseWorkspaceStatus.className="supabase-connection-status is-"+type;
}
function setSupabasePairingStatus(message,type="idle"){
  if(!els.supabasePairingStatus)return;
  els.supabasePairingStatus.textContent=message;
  els.supabasePairingStatus.className="supabase-connection-status is-"+type;
}
function setSupabaseTodaySetlistStatus(message,type="idle"){
  if(!els.supabaseTodaySetlistStatus)return;
  els.supabaseTodaySetlistStatus.textContent=message;
  els.supabaseTodaySetlistStatus.className="supabase-connection-status is-"+type;
}
function setSupabaseTodaySetlistMeta(message,type="idle"){
  if(!els.supabaseTodaySetlistMeta)return;
  els.supabaseTodaySetlistMeta.textContent=message;
  els.supabaseTodaySetlistMeta.className="supabase-connection-status is-"+type;
}
function setSupabaseTodaySetlistApplyStatus(message,type="idle"){
  if(!els.supabaseTodaySetlistApplyStatus)return;
  els.supabaseTodaySetlistApplyStatus.textContent=message;
  els.supabaseTodaySetlistApplyStatus.className="supabase-connection-status is-"+type;
}
function setSupabaseTodaySetlistApplyEnabled(enabled){
  if(els.applySupabaseTodaySetlistButton)els.applySupabaseTodaySetlistButton.disabled=!enabled;
}
let supabaseTestClient=null,supabaseTestClientSignature="";
const supabaseWorkspaceStorageKey="hootoSong.sync.workspaceId";
const supabaseUrlStorageKey="hootoSong.sync.supabaseUrl";
const supabasePublicKeyStorageKey="hootoSong.sync.supabasePublicKey";
const supabaseTodaySetlistStateKey="todaySetlist";
const localTodaySetlistStorageKey="hooto-today-setlist";
const beforeApplyTodaySetlistStorageKey="hootoSong.sync.beforeApply.todaySetlist";
let supabaseTodaySetlistPreviewState=null;
let verifiedSupabaseWorkspaceId="";
let verifiedSupabaseWorkspaceUserId="";
function firstSupabaseRpcRow(data){
  return Array.isArray(data)?data[0]:data;
}
function pickSupabaseField(row,names){
  if(!row||typeof row!=="object")return "";
  for(const name of names){
    if(row[name]!=null&&row[name]!=="")return row[name];
  }
  return "";
}
function formatSupabaseDateTime(value){
  if(!value)return "有効期限不明";
  const date=new Date(value);
  if(Number.isNaN(date.getTime()))return String(value);
  return date.toLocaleString("ja-JP",{dateStyle:"short",timeStyle:"medium"});
}
function formatSupabaseTimestamp(value){
  if(!value)return "未取得";
  const date=new Date(value);
  if(Number.isNaN(date.getTime()))return String(value);
  return date.toLocaleString("ja-JP",{dateStyle:"short",timeStyle:"medium"});
}
function setSupabaseTodaySetlistPreview(value){
  if(!els.supabaseTodaySetlistPreview)return;
  els.supabaseTodaySetlistPreview.textContent=typeof value==="string"?value:JSON.stringify(value,null,2);
}
function clearSupabaseTodaySetlistPreviewState(message="読み込みプレビュー待ち"){
  supabaseTodaySetlistPreviewState=null;
  setSupabaseTodaySetlistApplyEnabled(false);
  setSupabaseTodaySetlistApplyStatus(message,"idle");
}
function decodeSupabaseJwtPayload(token){
  try{
    const payload=String(token||"").split(".")[1];
    if(!payload)return null;
    const normalized=payload.replace(/-/g,"+").replace(/_/g,"/");
    const padded=normalized+"=".repeat((4-normalized.length%4)%4);
    return JSON.parse(atob(padded));
  }catch{
    return null;
  }
}
function isBlockedSupabaseKey(key){
  const value=String(key||"").trim();
  if(!value)return false;
  if(value.startsWith("sb_secret_"))return true;
  return decodeSupabaseJwtPayload(value)?.role==="service_role";
}
function restoreSupabaseConnectionSettings(){
  if(els.supabaseUrlInput&&!els.supabaseUrlInput.value)els.supabaseUrlInput.value=localStorage.getItem(supabaseUrlStorageKey)||"";
  if(els.supabaseKeyInput&&!els.supabaseKeyInput.value)els.supabaseKeyInput.value=localStorage.getItem(supabasePublicKeyStorageKey)||"";
}
function savedSupabaseWorkspaceId(){
  return (localStorage.getItem(supabaseWorkspaceStorageKey)||"").trim();
}
function clearVerifiedSupabaseWorkspace(){
  verifiedSupabaseWorkspaceId="";
  verifiedSupabaseWorkspaceUserId="";
}
function markSupabaseWorkspaceVerified(workspaceId,userId){
  verifiedSupabaseWorkspaceId=String(workspaceId||"");
  verifiedSupabaseWorkspaceUserId=String(userId||"");
}
function verifiedSupabaseWorkspaceForUser(user){
  const userId=String(user?.id||"");
  if(!userId||!verifiedSupabaseWorkspaceId||verifiedSupabaseWorkspaceUserId!==userId)return "";
  return verifiedSupabaseWorkspaceId;
}
function restoreSupabaseWorkspaceState(){
  const workspaceId=savedSupabaseWorkspaceId();
  clearVerifiedSupabaseWorkspace();
  if(!workspaceId){
    setSupabaseWorkspaceStatus("workspace未作成 / 未ペアリング","idle");
    setSupabaseTodaySetlistMeta("workspace未選択 / revision 未取得","idle");
    return "";
  }
  setSupabaseWorkspaceStatus("保存済みworkspaceがあります（未確認）："+workspaceId+"。先に匿名ログインしてworkspace確認を行ってください。","idle");
  setSupabasePairingStatus("保存済みworkspaceがありますが、member確認前のためまだ使用しません。","idle");
  setSupabaseTodaySetlistMeta("保存済みworkspace未確認 / revision 未取得","idle");
  return workspaceId;
}
function saveSupabaseConnectionSettings(){
  const url=els.supabaseUrlInput?.value.trim()||"",key=els.supabaseKeyInput?.value.trim()||"";
  if(url)localStorage.setItem(supabaseUrlStorageKey,url);
  else localStorage.removeItem(supabaseUrlStorageKey);
  if(isBlockedSupabaseKey(key)){
    localStorage.removeItem(supabasePublicKeyStorageKey);
    supabaseTestClient=null;
    supabaseTestClientSignature="";
    throw new Error("secret key / service_role key は保存・接続できません。Supabase の publishable key または anon public key を入力してください。");
  }
  if(key)localStorage.setItem(supabasePublicKeyStorageKey,key);
  else localStorage.removeItem(supabasePublicKeyStorageKey);
  return {url,key};
}
function handleSupabaseConnectionSettingInput(){
  try{
    clearVerifiedSupabaseWorkspace();
    saveSupabaseConnectionSettings();
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    setSupabaseConnectionStatus("接続設定エラー："+message,"error");
    console.warn("HootoSong Supabase setting not saved:",error);
  }
}
function getSupabaseClientForTest(){
  const {url,key}=saveSupabaseConnectionSettings();
  if(!url||!key)throw new Error("Supabase URL と public key を入力してください。");
  if(!globalThis.supabase?.createClient)throw new Error("Supabase client を読み込めませんでした。ネットワークまたはCDN読み込みを確認してください。");
  const signature=url+"\n"+key;
  if(supabaseTestClient&&supabaseTestClientSignature===signature)return supabaseTestClient;
  clearVerifiedSupabaseWorkspace();
  supabaseTestClient=globalThis.supabase.createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}});
  supabaseTestClientSignature=signature;
  return supabaseTestClient;
}
async function testSupabaseConnection(){
  setSupabaseConnectionStatus("接続確認中...","checking");
  if(els.testSupabaseConnectionButton)els.testSupabaseConnectionButton.disabled=true;
  try{
    const client=getSupabaseClientForTest();
    const {data,error}=await client.from("app_state").select("key, updated_at, revision").limit(1);
    if(error)throw error;
    const count=Array.isArray(data)?data.length:0;
    setSupabaseConnectionStatus(count?`接続成功：app_state を読み取れました（${count}件確認）`:"接続成功：app_state を読み取れました（現在は0件）","success");
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    const hint=/permission|policy|rls|jwt|auth|unauthorized|forbidden|row-level/i.test(message)?"未ログイン、またはRLSにより読み取りできません。":"URLまたはkey、app_stateテーブル、RLS設定を確認してください。";
    setSupabaseConnectionStatus(`接続失敗：${hint} ${message}`,"error");
  }finally{
    if(els.testSupabaseConnectionButton)els.testSupabaseConnectionButton.disabled=false;
  }
}
async function currentSupabaseTestUser(client){
  const {data,error}=await client.auth.getUser();
  if(error&&!/session|missing/i.test(String(error.message||"")))throw error;
  return data?.user||null;
}
async function verifySavedSupabaseWorkspaceMembership(client=null,user=null,{silent=false}={}){
  const activeClient=client||getSupabaseClientForTest();
  const activeUser=user||await currentSupabaseTestUser(activeClient);
  const workspaceId=savedSupabaseWorkspaceId();
  console.info("HootoSong workspace verification started:",{workspaceId,userId:activeUser?.id||null});
  clearVerifiedSupabaseWorkspace();
  if(!workspaceId){
    const message="保存済みworkspaceがありません。テストworkspace作成またはペアリングを行ってください。";
    if(!silent){
      setSupabaseWorkspaceStatus(message,"error");
      setSupabaseTodaySetlistMeta("workspace未選択 / revision 未取得","error");
    }
    console.warn("HootoSong workspace verification failed:",{reason:"missing-workspace"});
    throw new Error(message);
  }
  if(!activeUser){
    const message="workspace確認失敗：未ログインです。先に匿名ログインしてください。";
    if(!silent){
      setSupabaseWorkspaceStatus(message,"error");
      setSupabasePairingStatus(message,"error");
      setSupabaseTodaySetlistMeta("workspace未確認 / 先に匿名ログインしてください","error");
    }
    console.warn("HootoSong workspace verification failed:",{workspaceId,reason:"not-signed-in"});
    throw new Error(message);
  }
  const member=await activeClient.from("app_workspace_members").select("workspace_id, user_id, role").eq("workspace_id",workspaceId).eq("user_id",activeUser.id).maybeSingle();
  if(member.error){
    console.warn("HootoSong workspace verification failed:",{workspaceId,userId:activeUser.id,error:member.error});
    throw member.error;
  }
  if(!member.data){
    const message="workspace確認失敗：現在のログインユーザーはこのworkspaceのmemberではありません。再ペアリングするか、新しいworkspaceを作成してください。";
    if(!silent){
      setSupabaseWorkspaceStatus(message+" workspace: "+workspaceId,"error");
      setSupabasePairingStatus("member確認に失敗したため、このworkspaceではペアリングコードを発行しません。","error");
      setSupabaseTodaySetlistMeta("workspace member未確認 / 操作を中止しました","error");
    }
    console.warn("HootoSong workspace verification failed:",{workspaceId,userId:activeUser.id,reason:"not-member"});
    throw new Error(message);
  }
  markSupabaseWorkspaceVerified(workspaceId,activeUser.id);
  if(!silent){
    setSupabaseWorkspaceStatus("workspace確認成功：このworkspaceを使用できます。member確認済み："+workspaceId+" / role "+(member.data.role||"member"),"success");
    setSupabasePairingStatus("workspace確認済み：ペアリングコードを発行できます。確認済みworkspace："+workspaceId,"success");
    setSupabaseTodaySetlistMeta("確認済みworkspace："+workspaceId+" / revision 未取得","success");
  }
  console.info("HootoSong workspace verification success:",{workspaceId,userId:activeUser.id,role:member.data.role});
  return workspaceId;
}
async function verifySupabaseWorkspaceFromUi(){
  if(els.verifySupabaseWorkspaceButton)els.verifySupabaseWorkspaceButton.disabled=true;
  try{
    clearVerifiedSupabaseWorkspace();
    const workspaceId=savedSupabaseWorkspaceId();
    setSupabaseWorkspaceStatus(workspaceId?"workspace確認中... 保存済みworkspaceのmember情報を確認しています。workspace "+workspaceId:"保存済みworkspace確認中...","checking");
    setSupabaseTodaySetlistMeta("workspace確認中 / member情報を確認しています","checking");
    setSupabasePairingStatus("workspace確認中... 確認完了までペアリングコード発行は待ってください。","checking");
    console.info("HootoSong workspace verification started:",{workspaceId});
    const client=getSupabaseClientForTest();
    const user=await currentSupabaseTestUser(client);
    if(!user)throw new Error("workspace確認失敗：未ログインです。先に匿名ログインしてください。");
    return await verifySavedSupabaseWorkspaceMembership(client,user);
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    const displayMessage=message.startsWith("workspace確認失敗")?message:"workspace確認失敗："+message;
    setSupabaseWorkspaceStatus(displayMessage,"error");
    setSupabaseTodaySetlistMeta("workspace未確認 / 操作できません","error");
    setSupabasePairingStatus("workspace未確認：再ペアリングするか、新しいworkspaceを作成してください。","error");
    console.error("HootoSong workspace verification failed:",error);
    return null;
  }finally{
    if(els.verifySupabaseWorkspaceButton)els.verifySupabaseWorkspaceButton.disabled=false;
  }
}
function clearSavedSupabaseWorkspace(){
  localStorage.removeItem(supabaseWorkspaceStorageKey);
  clearVerifiedSupabaseWorkspace();
  clearSupabaseTodaySetlistPreviewState("workspaceを解除したため反映できません。");
  setSupabaseWorkspaceStatus("保存済みworkspace情報を解除しました。曲データや今日のセトリは削除していません。","idle");
  setSupabasePairingStatus("workspace未選択です。必要なら再ペアリングまたはworkspace作成を行ってください。","idle");
  setSupabaseTodaySetlistMeta("workspace未選択 / revision 未取得","idle");
  console.info("HootoSong saved workspace cleared:",supabaseWorkspaceStorageKey);
}
async function workspaceIdForSupabaseDataSync(client,user){
  const workspaceId=verifiedSupabaseWorkspaceForUser(user);
  if(workspaceId)return workspaceId;
  const savedWorkspaceId=savedSupabaseWorkspaceId();
  const message=savedWorkspaceId
    ?"先に「保存済みworkspace確認」を押して、現在のログインユーザーがmemberであることを確認してください。"
    :"保存済みworkspaceがありません。テストworkspace作成またはペアリングを行ってください。";
  setSupabaseWorkspaceStatus(message,"error");
  setSupabaseTodaySetlistMeta("workspace未確認 / 操作を中止しました","error");
  console.warn("HootoSong workspace use blocked:",{savedWorkspaceId,userId:user?.id||null,reason:"not-verified"});
  throw new Error(message);
}
async function testSupabaseStateRoundTrip(){
  setSupabaseStateTestStatus("sync_test 保存・読み戻し確認中...","checking");
  if(els.testSupabaseStateButton)els.testSupabaseStateButton.disabled=true;
  try{
    const client=getSupabaseClientForTest();
    const user=await currentSupabaseTestUser(client);
    if(!user){
      const message="未ログインです。sync_test の保存・取得には Supabase Auth ログインが必要です。";
      setSupabaseStateTestStatus(message,"error");
      console.warn("HootoSong sync_test skipped:",message);
      return;
    }
    const stateKey="sync_test";
    const savedAt=new Date().toISOString();
    const value={syncTest:true,phase:"3B",savedAt};
    const existing=await client.from("app_state").select("revision").eq("owner_id",user.id).eq("key",stateKey).maybeSingle();
    if(existing.error)throw existing.error;
    const revision=Number(existing.data?.revision||0)+1;
    const payload={owner_id:user.id,key:stateKey,value,updated_by:"hootosong-sync-test",revision};
    const saved=await client.from("app_state").upsert(payload,{onConflict:"owner_id,key"}).select("key, value, updated_at, updated_by, revision").single();
    if(saved.error)throw saved.error;
    const readBack=await client.from("app_state").select("key, value, updated_at, updated_by, revision").eq("owner_id",user.id).eq("key",stateKey).single();
    if(readBack.error)throw readBack.error;
    console.info("HootoSong sync_test saved/read:",readBack.data);
    setSupabaseStateTestStatus(`テスト成功：sync_test を保存して読み戻しました（revision ${readBack.data?.revision??revision}）`,"success");
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    const hint=/permission|policy|rls|jwt|auth|session|unauthorized|forbidden|row-level/i.test(message)?"ログイン状態、RLS、policyを確認してください。":"Supabase URL / public key / app_state を確認してください。";
    setSupabaseStateTestStatus(`テスト失敗：${hint} ${message}`,"error");
    console.error("HootoSong sync_test failed:",error);
  }finally{
    if(els.testSupabaseStateButton)els.testSupabaseStateButton.disabled=false;
  }
}
async function signInSupabaseAnonymously(){
  setSupabaseAuthStatus("匿名ログイン中...","checking");
  if(els.supabaseAnonymousLoginButton)els.supabaseAnonymousLoginButton.disabled=true;
  try{
    const client=getSupabaseClientForTest();
    const currentUser=await currentSupabaseTestUser(client);
    if(currentUser){
      setSupabaseAuthStatus("匿名ログイン済み："+currentUser.id,"success");
      if(savedSupabaseWorkspaceId())await verifySavedSupabaseWorkspaceMembership(client,currentUser).catch(()=>null);
      return currentUser;
    }
    const {data,error}=await client.auth.signInAnonymously();
    if(error)throw error;
    const user=data?.user;
    if(!user)throw new Error("匿名ログイン後のユーザー情報を取得できませんでした。");
    setSupabaseAuthStatus("匿名ログイン成功："+user.id,"success");
    console.info("HootoSong anonymous auth user:",user.id);
    if(savedSupabaseWorkspaceId())await verifySavedSupabaseWorkspaceMembership(client,user).catch(()=>null);
    return user;
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    setSupabaseAuthStatus("匿名ログイン失敗："+message,"error");
    console.error("HootoSong anonymous login failed:",error);
    return null;
  }finally{
    if(els.supabaseAnonymousLoginButton)els.supabaseAnonymousLoginButton.disabled=false;
  }
}
async function createSupabaseTestWorkspace(){
  setSupabaseWorkspaceStatus("テストworkspace作成中...","checking");
  if(els.createSupabaseWorkspaceButton)els.createSupabaseWorkspaceButton.disabled=true;
  try{
    const client=getSupabaseClientForTest();
    const user=await currentSupabaseTestUser(client);
    if(!user){
      const message="未ログインです。先に匿名ログインしてください。";
      setSupabaseWorkspaceStatus(message,"error");
      console.warn("HootoSong workspace create skipped:",message);
      return null;
    }
    const {data,error}=await client.rpc("create_app_workspace",{workspace_name:"HootoSong Sync Test",device_label:"PC test"});
    if(error)throw error;
    const workspaceId=Array.isArray(data)?data[0]:data;
    if(!workspaceId)throw new Error("workspace_id が返りませんでした。");
    localStorage.setItem(supabaseWorkspaceStorageKey,workspaceId);
    markSupabaseWorkspaceVerified(workspaceId,user.id);
    setSupabaseWorkspaceStatus("workspace作成成功・確認済み："+workspaceId,"success");
    setSupabaseTodaySetlistMeta("参照中workspace："+workspaceId+" / revision 未取得","success");
    console.info("HootoSong test workspace created:",workspaceId);
    return workspaceId;
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    setSupabaseWorkspaceStatus("workspace作成失敗："+message,"error");
    console.error("HootoSong workspace create failed:",error);
    return null;
  }finally{
    if(els.createSupabaseWorkspaceButton)els.createSupabaseWorkspaceButton.disabled=false;
  }
}
async function createSupabasePairingCode(){
  setSupabasePairingStatus("ペアリングコード発行中...","checking");
  if(els.createSupabasePairingCodeButton)els.createSupabasePairingCodeButton.disabled=true;
  try{
    const client=getSupabaseClientForTest();
    const user=await currentSupabaseTestUser(client);
    if(!user){
      const message="未ログインです。先に匿名ログインしてください。";
      setSupabasePairingStatus(message,"error");
      console.warn("HootoSong pairing code skipped:",message);
      return null;
    }
    const workspaceId=await workspaceIdForSupabaseDataSync(client,user);
    const {data,error}=await client.rpc("create_app_pairing_code",{target_workspace_id:workspaceId,valid_minutes:30});
    if(error)throw error;
    const row=firstSupabaseRpcRow(data);
    const code=typeof row==="string"?row:pickSupabaseField(row,["code","pairing_code","app_pairing_code","pairingCode"]);
    const expiresAt=pickSupabaseField(row,["expires_at","expiresAt","valid_until","validUntil"]);
    if(!code)throw new Error("ペアリングコードが返りませんでした。");
    if(els.supabasePairingCodeOutput)els.supabasePairingCodeOutput.textContent=code;
    if(els.supabasePairingExpiresOutput)els.supabasePairingExpiresOutput.textContent="有効期限：約30分（"+formatSupabaseDateTime(expiresAt)+"）";
    setSupabasePairingStatus("ペアリングコード発行成功：iPhone子機で入力してください。","success");
    console.info("HootoSong pairing code created:",{workspaceId,code,expiresAt});
    return {code,expiresAt};
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    setSupabasePairingStatus("ペアリングコード発行失敗："+message,"error");
    console.error("HootoSong pairing code failed:",error);
    return null;
  }finally{
    if(els.createSupabasePairingCodeButton)els.createSupabasePairingCodeButton.disabled=false;
  }
}
async function consumeSupabasePairingCode(){
  setSupabasePairingStatus("ペアリング実行中...","checking");
  if(els.consumeSupabasePairingCodeButton)els.consumeSupabasePairingCodeButton.disabled=true;
  try{
    const client=getSupabaseClientForTest();
    const user=await currentSupabaseTestUser(client);
    if(!user){
      const message="未ログインです。先に匿名ログインしてください。";
      setSupabasePairingStatus(message,"error");
      console.warn("HootoSong pairing consume skipped:",message);
      return null;
    }
    const inputCode=els.supabasePairingCodeInput?.value.trim()||"";
    if(!inputCode){
      const message="ペアリングコードを入力してください。";
      setSupabasePairingStatus(message,"error");
      console.warn("HootoSong pairing consume skipped:",message);
      return null;
    }
    const {data,error}=await client.rpc("consume_app_pairing_code",{input_code:inputCode,device_label:"iPhone test device"});
    if(error)throw error;
    const row=firstSupabaseRpcRow(data);
    const workspaceId=typeof row==="string"?row:pickSupabaseField(row,["workspace_id","workspaceId","target_workspace_id","targetWorkspaceId"]);
    if(!workspaceId)throw new Error("workspace_id が返りませんでした。");
    localStorage.setItem(supabaseWorkspaceStorageKey,workspaceId);
    markSupabaseWorkspaceVerified(workspaceId,user.id);
    setSupabasePairingStatus("ペアリング成功：workspace "+workspaceId+" を保存しました。workspace版テスト保存で確認できます。","success");
    setSupabaseWorkspaceStatus("子機参加済みworkspace確認済み："+workspaceId,"success");
    setSupabaseTodaySetlistMeta("参照中workspace："+workspaceId+" / revision 未取得","success");
    console.info("HootoSong pairing consumed:",{workspaceId});
    return workspaceId;
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    const hint=/expired|期限|invalid|not found|見つ|permission|policy|rls|jwt|auth|session|unauthorized|forbidden|row-level/i.test(message)?"コード、期限、ログイン状態、workspace member、RLS、policyを確認してください。":"Supabase URL / public key / RPC を確認してください。";
    setSupabasePairingStatus("ペアリング失敗："+hint+" "+message,"error");
    console.error("HootoSong pairing consume failed:",error);
    return null;
  }finally{
    if(els.consumeSupabasePairingCodeButton)els.consumeSupabasePairingCodeButton.disabled=false;
  }
}
function readLocalTodaySetlistForUpload(){
  let parsed;
  try{
    parsed=JSON.parse(localStorage.getItem(localTodaySetlistStorageKey)||"null");
  }catch(error){
    throw new Error("localStorage の todaySetlist をJSONとして読めませんでした。");
  }
  if(!parsed||typeof parsed!=="object")throw new Error("localStorage に todaySetlist がありません。先に今日のセトリ内容を確認してください。");
  if(!Array.isArray(parsed.songs))throw new Error("todaySetlist.songs が配列ではありません。アップロードを中止します。");
  const normalized=normalizeSetlistData(parsed);
  if(!normalized.songs.length)throw new Error("todaySetlist が空です。空データはSupabaseへアップロードしません。");
  return normalized;
}
async function uploadSupabaseTodaySetlist(){
  setSupabaseTodaySetlistStatus("todaySetlist アップロード中...","checking");
  setSupabaseTodaySetlistMeta("revision / updated_at 確認中","checking");
  setSupabaseTodaySetlistPreview("アップロード中...");
  clearSupabaseTodaySetlistPreviewState("アップロード後、読み込み確認を行うと反映できます。");
  if(els.uploadSupabaseTodaySetlistButton)els.uploadSupabaseTodaySetlistButton.disabled=true;
  try{
    const client=getSupabaseClientForTest();
    const user=await currentSupabaseTestUser(client);
    if(!user)throw new Error("未ログインです。先に匿名ログインしてください。");
    const workspaceId=await workspaceIdForSupabaseDataSync(client,user);
    setSupabaseTodaySetlistMeta("参照中workspace："+workspaceId+" / revision 確認中","checking");
    const setlist=readLocalTodaySetlistForUpload();
    const savedAt=new Date().toISOString();
    const value={schemaVersion:1,kind:"todaySetlist",savedAt,sourceDevice:"PC parent",data:setlist};
    const existing=await client.from("app_workspace_state").select("revision").eq("workspace_id",workspaceId).eq("key",supabaseTodaySetlistStateKey).maybeSingle();
    if(existing.error)throw existing.error;
    const revision=Number(existing.data?.revision||0)+1;
    const payload={workspace_id:workspaceId,key:supabaseTodaySetlistStateKey,value,updated_by:user.id,updated_by_label:"hootosong-sync-phase-3i-today-setlist",revision};
    const saved=await client.from("app_workspace_state").upsert(payload,{onConflict:"workspace_id,key"}).select("key, value, updated_at, updated_by, updated_by_label, revision").single();
    if(saved.error)throw saved.error;
    console.info("HootoSong todaySetlist uploaded:",saved.data);
    setSupabaseTodaySetlistStatus("アップロード成功：todaySetlist をSupabaseへ保存しました。","success");
    setSupabaseTodaySetlistMeta("workspace "+workspaceId+" / revision "+saved.data.revision+" / updated_at "+formatSupabaseTimestamp(saved.data.updated_at)+" / "+(saved.data.updated_by_label||"labelなし"),"success");
    setSupabaseTodaySetlistPreview(saved.data);
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    const hint=/permission|policy|rls|jwt|auth|session|unauthorized|forbidden|row-level/i.test(message)?"ログイン状態、workspace member、RLS、policyを確認してください。":"workspace_id、todaySetlist、Supabase接続設定を確認してください。";
    setSupabaseTodaySetlistStatus("アップロード失敗："+hint+" "+message,"error");
    setSupabaseTodaySetlistMeta("revision / updated_at 未更新","error");
    setSupabaseTodaySetlistPreview("アップロード失敗：\n"+message);
    console.error("HootoSong todaySetlist upload failed:",error);
  }finally{
    if(els.uploadSupabaseTodaySetlistButton)els.uploadSupabaseTodaySetlistButton.disabled=false;
  }
}
async function previewSupabaseTodaySetlist(){
  setSupabaseTodaySetlistStatus("todaySetlist 読み込み確認中...","checking");
  setSupabaseTodaySetlistMeta("revision / updated_at 取得中","checking");
  setSupabaseTodaySetlistPreview("読み込み確認中...");
  clearSupabaseTodaySetlistPreviewState("読み込み確認中です。");
  if(els.previewSupabaseTodaySetlistButton)els.previewSupabaseTodaySetlistButton.disabled=true;
  try{
    const client=getSupabaseClientForTest();
    const user=await currentSupabaseTestUser(client);
    if(!user)throw new Error("未ログインです。先に匿名ログインしてください。");
    const workspaceId=await workspaceIdForSupabaseDataSync(client,user);
    setSupabaseTodaySetlistMeta("参照中workspace："+workspaceId+" / revision 取得中","checking");
    const readBack=await client.from("app_workspace_state").select("key, value, updated_at, updated_by, updated_by_label, revision").eq("workspace_id",workspaceId).eq("key",supabaseTodaySetlistStateKey).maybeSingle();
    if(readBack.error)throw readBack.error;
    if(!readBack.data){
      const message="まだSupabaseにtodaySetlistがありません。";
      setSupabaseTodaySetlistStatus(message,"idle");
      setSupabaseTodaySetlistMeta("workspace "+workspaceId+" / revision 未取得","idle");
      setSupabaseTodaySetlistPreview(message+"\n参照中workspace："+workspaceId);
      clearSupabaseTodaySetlistPreviewState("反映できるプレビューがありません。");
      console.info("HootoSong todaySetlist preview empty:",{workspaceId});
      return;
    }
    console.info("HootoSong todaySetlist preview loaded:",readBack.data);
    setSupabaseTodaySetlistStatus("読み込み成功：localStorageへは反映していません。","success");
    setSupabaseTodaySetlistMeta("workspace "+workspaceId+" / revision "+readBack.data.revision+" / updated_at "+formatSupabaseTimestamp(readBack.data.updated_at)+" / "+(readBack.data.updated_by_label||"labelなし"),"success");
    setSupabaseTodaySetlistPreview(readBack.data);
    supabaseTodaySetlistPreviewState={workspaceId,row:readBack.data};
    const songCount=Array.isArray(readBack.data?.value?.data?.songs)?readBack.data.value.data.songs.length:0;
    setSupabaseTodaySetlistApplyEnabled(true);
    setSupabaseTodaySetlistApplyStatus("反映準備OK：曲数 "+songCount+" / revision "+(readBack.data.revision??"未取得"),"success");
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    const hint=/permission|policy|rls|jwt|auth|session|unauthorized|forbidden|row-level/i.test(message)?"ログイン状態、workspace member、RLS、policyを確認してください。":"workspace_id、Supabase接続設定、app_workspace_stateを確認してください。";
    setSupabaseTodaySetlistStatus("読み込み失敗："+hint+" "+message,"error");
    setSupabaseTodaySetlistMeta("revision / updated_at 未取得","error");
    setSupabaseTodaySetlistPreview("読み込み失敗：\n"+message);
    clearSupabaseTodaySetlistPreviewState("読み込みに失敗したため反映できません。");
    console.error("HootoSong todaySetlist preview failed:",error);
  }finally{
    if(els.previewSupabaseTodaySetlistButton)els.previewSupabaseTodaySetlistButton.disabled=false;
  }
}
function validateSupabaseTodaySetlistPreviewForApply(){
  const state=supabaseTodaySetlistPreviewState;
  if(!state?.row)throw new Error("プレビューがありません。先にSupabaseから読み込み確認してください。");
  const currentWorkspaceId=verifiedSupabaseWorkspaceId;
  if(!currentWorkspaceId)throw new Error("workspace確認が完了していません。先に匿名ログインして保存済みworkspace確認を行ってください。");
  if(state.workspaceId!==currentWorkspaceId)throw new Error("workspaceが一致しません。読み込み確認をやり直してください。");
  const row=state.row;
  if(row.key!==supabaseTodaySetlistStateKey)throw new Error("todaySetlistではないデータです。");
  const value=row.value;
  if(!value||typeof value!=="object")throw new Error("valueがありません。");
  if(value.kind!==supabaseTodaySetlistStateKey)throw new Error("todaySetlistではないデータです。");
  if(Number(value.schemaVersion)!==1)throw new Error("schemaVersion が未対応です。");
  if(!value.data||typeof value.data!=="object")throw new Error("dataがありません。");
  if(!Array.isArray(value.data.songs))throw new Error("data.songs が配列ではありません。");
  if(!value.data.songs.length)throw new Error("空データのため反映しません。");
  const missingTitle=value.data.songs.some(song=>!String(song?.title||"").trim());
  if(missingTitle)throw new Error("曲名のないデータを含むため反映しません。");
  const normalized=normalizeSetlistData(value.data);
  if(!normalized.songs.length)throw new Error("空データのため反映しません。");
  return {row,value,data:normalized,currentWorkspaceId};
}
function applySupabaseTodaySetlistPreview(){
  setSupabaseTodaySetlistApplyStatus("反映前チェック中...","checking");
  try{
    const {row,data,currentWorkspaceId}=validateSupabaseTodaySetlistPreviewForApply();
    const songCount=data.songs.length;
    const ok=confirm(
      "Supabaseから読み込んだtodaySetlistを、この端末の今日のセトリへ反映します。\n\n"+
      "workspace: "+currentWorkspaceId+"\n"+
      "revision: "+(row.revision??"未取得")+"\n"+
      "updated_at: "+formatSupabaseTimestamp(row.updated_at)+"\n"+
      "曲数: "+songCount+"\n\n"+
      "必要なら先にバックアップ保存してください。\n自動同期ではありません。\nよろしいですか？"
    );
    if(!ok){
      setSupabaseTodaySetlistApplyStatus("反映をキャンセルしました。","idle");
      return;
    }
    let previousData=null;
    const previousRaw=localStorage.getItem(localTodaySetlistStorageKey);
    if(previousRaw){
      try{
        previousData=JSON.parse(previousRaw);
      }catch{
        previousData=previousRaw;
      }
    }
    const backup={
      savedAt:new Date().toISOString(),
      sourceRevision:row.revision??null,
      sourceUpdatedAt:row.updated_at||null,
      workspaceId:currentWorkspaceId,
      data:previousData
    };
    localStorage.setItem(beforeApplyTodaySetlistStorageKey,JSON.stringify(backup));
    localStorage.setItem(localTodaySetlistStorageKey,JSON.stringify(data));
    todaySetlist=normalizeSetlistData(data);
    renderSetlist();
    render();
    renderRemoteView();
    const message="反映成功：今日のセトリを更新しました。曲数 "+songCount+" / revision "+(row.revision??"未取得");
    setSupabaseTodaySetlistApplyStatus(message,"success");
    console.info("HootoSong todaySetlist preview applied:",{workspaceId:currentWorkspaceId,revision:row.revision,updatedAt:row.updated_at,songCount});
    showToast("今日のセトリへ反映しました");
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    setSupabaseTodaySetlistApplyStatus("反映失敗："+message,"error");
    console.error("HootoSong todaySetlist apply failed:",error);
  }
}
async function testSupabaseWorkspaceStateRoundTrip(){
  setSupabaseWorkspaceStatus("workspace_sync_test 保存・読み戻し確認中...","checking");
  if(els.testSupabaseWorkspaceStateButton)els.testSupabaseWorkspaceStateButton.disabled=true;
  try{
    const client=getSupabaseClientForTest();
    const user=await currentSupabaseTestUser(client);
    if(!user){
      const message="未ログインです。先に匿名ログインしてください。";
      setSupabaseWorkspaceStatus(message,"error");
      console.warn("HootoSong workspace_sync_test skipped:",message);
      return;
    }
    const workspaceId=await workspaceIdForSupabaseDataSync(client,user);
    const stateKey="workspace_sync_test";
    const savedAt=new Date().toISOString();
    const value={syncTest:true,phase:"3G",mode:"workspace",savedAt};
    const existing=await client.from("app_workspace_state").select("revision").eq("workspace_id",workspaceId).eq("key",stateKey).maybeSingle();
    if(existing.error)throw existing.error;
    const revision=Number(existing.data?.revision||0)+1;
    const payload={workspace_id:workspaceId,key:stateKey,value,updated_by:user.id,updated_by_label:"hootosong-sync-phase-3g",revision};
    const saved=await client.from("app_workspace_state").upsert(payload,{onConflict:"workspace_id,key"}).select("key, value, updated_at, updated_by, updated_by_label, revision").single();
    if(saved.error)throw saved.error;
    const readBack=await client.from("app_workspace_state").select("key, value, updated_at, updated_by, updated_by_label, revision").eq("workspace_id",workspaceId).eq("key",stateKey).single();
    if(readBack.error)throw readBack.error;
    console.info("HootoSong workspace_sync_test saved/read:",readBack.data);
    setSupabaseWorkspaceStatus("テスト成功：workspace_sync_test を保存して読み戻しました。workspace "+workspaceId+" / revision "+(readBack.data?.revision??revision),"success");
  }catch(error){
    const message=String(error?.message||error||"不明なエラー");
    const hint=/permission|policy|rls|jwt|auth|session|unauthorized|forbidden|row-level/i.test(message)?"ログイン状態、workspace member、RLS、policyを確認してください。":"Supabase URL / public key / RPC / app_workspace_state を確認してください。";
    setSupabaseWorkspaceStatus("workspaceテスト失敗："+hint+" "+message,"error");
    console.error("HootoSong workspace_sync_test failed:",error);
  }finally{
    if(els.testSupabaseWorkspaceStateButton)els.testSupabaseWorkspaceStateButton.disabled=false;
  }
}
function parseCSV(text){
  const rows=[];let row=[],field="",quoted=false;text=text.replace(/^\uFEFF/,"");
  for(let i=0;i<text.length;i++){
    const c=text[i];
    if(quoted){if(c==='"'&&text[i+1]==='"'){field+='"';i++;}else if(c==='"')quoted=false;else field+=c;}
    else if(c==='"')quoted=true;
    else if(c===","){row.push(field.trim());field="";}
    else if(c==="\n"){row.push(field.trim());if(row.some(Boolean))rows.push(row);row=[];field="";}
    else if(c!=="\r")field+=c;
  }
  row.push(field.trim());if(row.some(Boolean))rows.push(row);
  if(rows.length<2)throw new Error("データ行がありません");
  const rawHeaders=rows.shift().map(cleanCSVText),headers=rawHeaders.map(normalize);
  const findIndex=names=>{const normalizedNames=names.map(normalize);return headers.findIndex(header=>normalizedNames.includes(header));};
  const pick=(v,n,f="")=>{const i=findIndex(n);return i>=0?cleanCSVText(v[i]):f;};
  const statusNames=["状態","ステータス","歌唱状態","status"];
  const headerStatusIndex=findIndex(statusNames),songIdIndex=findIndex(["曲ID","曲Id","曲id","songId","song id","id"]);
  const stateValues=new Set(["歌える","○歌える","◎歌える","練習中","△練習中","要確認","歌唱済み","保留","×保留"].map(normalize));
  const columnScores=rawHeaders.map((_,index)=>rows.reduce((score,v)=>score+(stateValues.has(normalize(v[index]))?1:0),0));
  const bestScore=Math.max(0,...columnScores),inferredStatusIndex=columnScores.indexOf(bestScore),headerScore=headerStatusIndex>=0?columnScores[headerStatusIndex]:0;
  let statusIndex=headerStatusIndex,statusSource="見出し一致",warning="";
  if(headerStatusIndex<0&&bestScore>0){statusIndex=inferredStatusIndex;statusSource="値から自動推定";warning="状態列の見出しが候補と一致しなかったため、値の内容から推定しました。";}
  else if(headerStatusIndex>=0&&headerScore===0&&bestScore>0){statusIndex=inferredStatusIndex;statusSource="値から自動推定";warning=`見出し「${rawHeaders[headerStatusIndex]}」の中身が状態値に見えなかったため、別列を推定しました。`;}
  else if(headerStatusIndex<0){statusIndex=-1;statusSource="未検出";warning="状態列が見つかりません。見出し名または状態値を確認してください。";}
  const songIdValues=songIdIndex>=0?rows.map(v=>cleanCSVText(v[songIdIndex])).filter(Boolean):[],songIdSeen=new Set(),songIdDuplicates=new Set();
  songIdValues.forEach(id=>{if(songIdSeen.has(id))songIdDuplicates.add(id);else songIdSeen.add(id);});
  const debug={rawHeaders,headers,statusIndex,statusHeader:statusIndex>=0?rawHeaders[statusIndex]:"",headerStatusIndex,inferredStatusIndex:bestScore>0?inferredStatusIndex:-1,columnScores,statusSource,warning,statusColumnMessage:statusIndex>=0?`${statusSource}: ${rawHeaders[statusIndex]||`${statusIndex+1}列目`}（${statusIndex+1}列目）`:"状態列が見つかりません",statusSamples:[],statusCounts:{"歌える":0,"練習中":0,"要確認":0},songIdIndex,songIdHeader:songIdIndex>=0?rawHeaders[songIdIndex]:"",hasSongIdColumn:songIdIndex>=0,songIdCount:songIdValues.length,songIdMissingCount:songIdIndex>=0?rows.length-songIdValues.length:rows.length,songIdDuplicateCount:songIdDuplicates.size,duplicateSongIds:[...songIdDuplicates]};
  const usedSongIds=new Set();
  const parsed=rows.map((v,rowIndex)=>{
    const rawStatus=statusIndex>=0?cleanCSVText(v[statusIndex]):"",mappedStatus=statusIndex>=0?normalizedStatus(rawStatus):"要確認";
    if(debug.statusSamples.length<10)debug.statusSamples.push({row:rowIndex+2,raw:rawStatus,normalized:normalize(rawStatus),mapped:mappedStatus});
    debug.statusCounts[mappedStatus]=(debug.statusCounts[mappedStatus]||0)+1;
    const karaokeText=pick(v,["普段使うオケ","オケ","karaoke"]);
    let karaokes=karaokeText.split(/[、,|／/]+/).map(x=>x.trim()).filter(Boolean);
    if(/^(true|1|yes|はい|あり|有)$/i.test(pick(v,["歌っちゃ王有無","歌っちゃ王","utacchaou"]))&&!karaokes.includes("歌っちゃ王"))karaokes.unshift("歌っちゃ王");
    const rawSongId=songIdIndex>=0?cleanCSVText(v[songIdIndex]):"";
    const song=normalizeSong({
      id:rawSongId||makeUniqueId(usedSongIds),
      title:pick(v,["曲名","タイトル","曲タイトル","title","song"]),
      titleReading:pick(v,["タイトル読み","曲名読み","titlereading"]),
      artist:pick(v,["アーティスト","歌手","artist"]),
      artistReading:pick(v,["歌手名読み","アーティスト読み","artistreading"]),
      karaokes,
      genres:pick(v,["ジャンル","ジャンルタグ","genre","genres"]),
      vocalType:pick(v,["ボーカル属性","ボーカル","vocalType","vocal"]),
      keySetting:pick(v,["キー設定","キー","key"],"原曲"),
      favorite:/^(true|1|yes|はい|お気に入り|★|♥)$/i.test(pick(v,["お気に入り","favorite","fav"])),
      status:mappedStatus,
      season:pick(v,["季節","季節タグ","season"],"通年")||"通年",
      lastSung:pick(v,["最終歌唱日","最終歌唱","lastsung","lastsungdate","date"]),
      count:Math.max(0,parseInt(pick(v,["歌唱回数","回数","count","singcount"],"0"),10)||0),
      notes:pick(v,["備考","メモ","notes"])
    });
    usedSongIds.add(song.id);
    return song;
  }).filter(s=>s.title);
  debug.importedCount=parsed.length;
  debug.finalStatusCounts=parsed.reduce((counts,song)=>(counts[song.status]=(counts[song.status]||0)+1,counts),{"歌える":0,"練習中":0,"要確認":0});
  globalThis.hootoLastCsvDebug=debug;
  console.info("Hooto CSV debug",debug);
  return parsed;
}
els.grid.addEventListener("pointerdown",event=>{if(event.target.closest("button[data-action]"))event.stopPropagation();});
els.grid.addEventListener("click",event=>{
  const button=event.target.closest("button[data-action]");if(!button)return;
  event.preventDefault();event.stopPropagation();
  const index=Number(button.dataset.index),song=songs[index];if(!song)return;
  const action=button.dataset.action;
  if(action==="edit"){openSongFormById(song.id);return;}
  if(action==="delete"){pendingDeleteIndex=index;els.deleteSongName.textContent=`「${song.title}」 / ${song.artist}`;els.deleteDialog.showModal();return;}
  if(action==="setlist"){openSetlistTargetDialog(song.id,"song-card");return;}
  if(action==="song-log"){singLogSongFilter=song.id;els.singLogSearch.value="";els.singLogTypeFilter.value="all";showView("singLogs");return;}
  if(action==="favorite"){song.favorite=!song.favorite;showToast(song.favorite?"お気に入りに追加しました ♡":"お気に入りから外しました");saveSongs();rebuildStatuses();render();return;}
  if(action==="sang"){openSingRecord(index);return;}
});
els.grid.addEventListener("change",event=>{const select=event.target.closest('select[data-action="season"]');if(!select)return;const song=songs[Number(select.dataset.index)];song.season=select.value;saveSongs();currentPage=1;render();showToast(`季節を「${select.value}」に変更しました`);});
els.favoriteButtons.forEach(button=>button.addEventListener("click",()=>{resetFocusedSongForUserFilter();favoriteFilter=button.dataset.favorite;currentPage=1;els.favoriteButtons.forEach(b=>b.classList.toggle("active",b===button));render();}));
[els.search,els.status,els.season,els.genre,els.vocal,els.sort].forEach(el=>el.addEventListener(el===els.search?"input":"change",()=>{resetFocusedSongForUserFilter();currentPage=1;render();}));
$("#overdueButton").addEventListener("click",()=>{clearFocusedSong();specialFilter="overdue";currentPage=1;render();document.querySelector(".collection").scrollIntoView({behavior:"smooth"});});
$("#titleSortButton").addEventListener("click",()=>{clearFocusedSong();specialFilter="all";els.sort.value="title";currentPage=1;render();document.querySelector(".collection").scrollIntoView({behavior:"smooth"});showToast("タイトル順で表示しました");});
$("#favoriteDataButton").addEventListener("click",()=>{clearFocusedSong();specialFilter="all";favoriteFilter="favorite";currentPage=1;els.favoriteButtons.forEach(b=>b.classList.toggle("active",b.dataset.favorite==="favorite"));render();document.querySelector(".collection").scrollIntoView({behavior:"smooth"});});
els.clearSpecial.addEventListener("click",()=>{clearFocusedSong();specialFilter="all";currentPage=1;render();});
els.pageSize.addEventListener("change",()=>{pageSize=Number(els.pageSize.value);currentPage=1;render();});
els.prevPage.addEventListener("click",()=>{if(currentPage>1){currentPage--;render();document.querySelector(".collection").scrollIntoView({behavior:"smooth"});}});
els.nextPage.addEventListener("click",()=>{const pages=Math.max(1,Math.ceil(filteredSongs().length/pageSize));if(currentPage<pages){currentPage++;render();document.querySelector(".collection").scrollIntoView({behavior:"smooth"});}});
$("#randomButton").addEventListener("click",()=>pickSong("random"));
$("#rouletteButton").addEventListener("click",()=>pickSong("favorite"));
els.retryPick.addEventListener("click",()=>pickSong(lastPickType));
$("#closePick").addEventListener("click",()=>els.dialog.close());
[els.randomStatus,els.randomGenre,els.randomVocal,els.randomKaraoke,els.randomCount,els.randomFavoriteOnly,els.randomOverdueOnly].forEach(input=>input.addEventListener("change",()=>{if(lastPickType==="random")pickSong("random");}));
els.pickAddSetlist.addEventListener("click",addPickedToSetlist);
els.pickAddDraft.addEventListener("click",addPickedToDraft);
els.pickShowSong.addEventListener("click",showPickedSongCard);
els.pickCandidateList.addEventListener("pointerdown",event=>{if(event.target.closest("button[data-pick-action]"))event.stopPropagation();});
els.pickCandidateList.addEventListener("click",event=>{const button=event.target.closest("button[data-pick-action]");if(!button)return;event.preventDefault();event.stopPropagation();const id=button.dataset.songId;if(button.dataset.pickAction==="setlist"){if(!pickCandidateAddedToSetlist(id))addSongIdToSetlist(id);if(pickCandidateAddedToSetlist(id))markPickCandidateAdded(button);}if(button.dataset.pickAction==="draft"){if(els.dialog.open)els.dialog.close();openSetlistTargetDialog(id,"random-candidate");}if(button.dataset.pickAction==="show")showSongCardById(id);});
els.bottomTabs.forEach(button=>button.addEventListener("click",()=>{if(button.dataset.bottomTab==="logs"){singLogSongFilter=null;els.singLogSearch.value="";els.singLogTypeFilter.value="all";}showMainTab(button.dataset.bottomTab);}));
document.querySelectorAll("[data-bottom-tab-jump]").forEach(button=>button.addEventListener("click",()=>{if(document.body.dataset.uiMode==="remote"&&button.dataset.bottomTabJump==="settings"){openRemoteSettings();return;}showMainTab(button.dataset.bottomTabJump);}));
els.remoteModeButton?.addEventListener("click",toggleRemoteMode);
els.remoteSetlistList?.addEventListener("pointerdown",event=>{if(event.target.closest("button[data-remote-action]"))event.stopPropagation();});
els.remoteSetlistList?.addEventListener("click",event=>{const actionButton=event.target.closest("button[data-remote-action]");if(actionButton){event.preventDefault();event.stopPropagation();if(actionButton.dataset.remoteAction==="sang-this"){const song=todaySetlist.songs[Number(actionButton.dataset.remoteSetlistIndex)];openRemoteSangDialogForSong(song);}return;}const row=event.target.closest("[data-remote-setlist-index]");if(!row)return;const index=Number(row.dataset.remoteSetlistIndex);remoteExpandedSetlistIndex=remoteExpandedSetlistIndex===index?null:index;renderRemoteView();});
els.remoteSetlistList?.addEventListener("keydown",event=>{if(event.key!=="Enter"&&event.key!==" ")return;const row=event.target.closest("[data-remote-setlist-index]");if(!row)return;event.preventDefault();const index=Number(row.dataset.remoteSetlistIndex);remoteExpandedSetlistIndex=remoteExpandedSetlistIndex===index?null:index;renderRemoteView();});
els.remoteCommitSetlist?.addEventListener("click",handleCommitSetlistRequest);
els.remoteLogToggle?.addEventListener("click",()=>{remoteLogsExpanded=!remoteLogsExpanded;renderRemoteView();});
$("#cancelRemoteSang")?.addEventListener("click",()=>{pendingRemoteSangSongId=null;els.remoteSangDialog.close();});
document.addEventListener("click",event=>{const button=event.target.closest?.("#confirmRemoteSang");if(!button||!els.remoteSangDialog?.open)return;event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();if(remoteSangSaving||remoteSangCooldownActive())return;if(!pendingRemoteSangSongId){els.remoteSangDialog.close();showToast("記録する曲が見つかりません");return;}remoteSangSaving=true;renderRemoteView();const log=completeSongById(pendingRemoteSangSongId,{type:"配信",karaoke:"",memo:""});pendingRemoteSangSongId=null;if(log){const nextSong=currentRemoteNextSong();setRemoteSangFeedback(log.title,nextSong);els.remoteSangDialog.close();startRemoteSangCooldown(2500);showToast(`記録しました：${log.title}${nextSong?` / 次：${nextSong.title}`:""}`);}else{remoteSangSaving=false;renderRemoteView();}},true);
$("#historyButton").addEventListener("click",()=>showView("history"));
$("#backToSongs").addEventListener("click",()=>showView("home"));
$("#setlistButton").addEventListener("click",()=>showView("setlist"));
$("#draftsButton").addEventListener("click",()=>showView("drafts"));
$("#singLogButton").addEventListener("click",()=>{singLogSongFilter=null;els.singLogSearch.value="";els.singLogTypeFilter.value="all";showView("singLogs");});
$("#artistsButton").addEventListener("click",()=>showView("artists"));
document.querySelectorAll("[data-back-home]").forEach(button=>button.addEventListener("click",()=>showView("home")));
$("#createStream").addEventListener("click",()=>{const date=els.streamDate.value;if(!date){showToast("日付を選んでください");return;}if(streams.some(stream=>stream.date===date)){showToast("この日の保存メモはすでにあります");return;}streams.push(normalizeStream({date,songs:[]}));saveStreams();renderHistory();showToast("保存メモを作成しました");});
els.historyList.addEventListener("pointerdown",event=>{if(event.target.closest("button[data-stream-action]"))event.stopPropagation();});
els.historyList.addEventListener("click",event=>{const button=event.target.closest("button[data-stream-action]");if(!button)return;event.preventDefault();event.stopPropagation();const index=Number(button.dataset.index);if(button.dataset.streamAction==="duplicate")duplicateStreamToToday(index);if(button.dataset.streamAction==="delete")deleteStreamArchive(index);});
$("#openSetlistFromDrafts").addEventListener("click",()=>showView("setlist"));
els.draftList.addEventListener("pointerdown",event=>{const button=event.target.closest("button[data-draft-action]");if(button)event.stopPropagation();});
els.draftList.addEventListener("click",event=>{const button=event.target.closest("button[data-draft-action]");if(!button)return;event.preventDefault();event.stopPropagation();const index=Number(button.dataset.index);if(button.dataset.draftAction==="use")useDraft(index);if(button.dataset.draftAction==="edit")editDraft(index);if(button.dataset.draftAction==="duplicate")duplicateDraft(index);if(button.dataset.draftAction==="delete")deleteDraft(index);});
els.setlistTargetTodayButton?.addEventListener("click",addPendingSongToTodaySetlist);
els.setlistTargetDraftList?.addEventListener("click",event=>{const button=event.target.closest("button[data-draft-target]");if(!button)return;event.preventDefault();event.stopPropagation();const draft=addSongToDraftById(button.dataset.draftTarget,pendingSetlistTargetSongId);if(!draft)return;const song=songById(pendingSetlistTargetSongId);closeSetlistTargetDialog();showToast(`「${song?.title||"曲"}」を「${draftName(draft)}」に追加しました`);});
els.setlistTargetCreateDraftButton?.addEventListener("click",()=>{const name=els.setlistTargetNewDraftName.value.trim(),draft=createDraftWithSong(pendingSetlistTargetSongId,name);if(!draft)return;const song=songById(pendingSetlistTargetSongId);closeSetlistTargetDialog();showToast(`「${song?.title||"曲"}」を入れたセトリ案を作成しました`);});
$("#cancelSetlistTarget")?.addEventListener("click",closeSetlistTargetDialog);
$("#closeSetlistTarget")?.addEventListener("click",closeSetlistTargetDialog);
els.setlistTargetDialog?.addEventListener("close",()=>{pendingSetlistTargetSongId=null;});
$("#addSongButton").addEventListener("click",()=>openSongForm());
$("#closeSongForm").addEventListener("click",closeSongForm);
$("#cancelSongForm").addEventListener("click",closeSongForm);
els.songForm.addEventListener("submit",event=>{event.preventDefault();const song=songFromForm();if(!song.title||!song.artist){showToast("曲タイトルとアーティストを入力してください");return;}const rawIndex=$("#songIndex").value;const editing=rawIndex!=="";if(editing){songs[Number(rawIndex)]=song;todaySetlist.songs.forEach(item=>{if(item.id===song.id)Object.assign(item,{title:song.title,artist:song.artist,keySetting:song.keySetting});});saveSetlistData();}else{songs.push(song);currentPage=1;}saveSongs();rebuildStatuses();render();renderArtists(els.artistSearch.value);closeSongForm();showToast(editing?"曲情報を更新しました":"新しい曲を追加しました");});
$("#cancelDelete").addEventListener("click",()=>{pendingDeleteIndex=null;els.deleteDialog.close();});
$("#confirmDelete").addEventListener("click",()=>{if(pendingDeleteIndex===null)return;const deleted=songs.splice(pendingDeleteIndex,1)[0];todaySetlist.songs=todaySetlist.songs.filter(item=>item.id!==deleted.id);pendingDeleteIndex=null;saveSongs();saveSetlistData();rebuildStatuses();render();renderSetlist();els.deleteDialog.close();showToast(`「${deleted.title}」を削除しました`);});
$("#cancelDraftDelete").addEventListener("click",()=>{pendingDeleteDraftIndex=null;els.deleteDraftDialog.close();});
$("#confirmDraftDelete").addEventListener("click",()=>{if(pendingDeleteDraftIndex===null)return;const deleted=draftSetlists.splice(pendingDeleteDraftIndex,1)[0];if(editingDraftId===deleted.id)editingDraftId=null;pendingDeleteDraftIndex=null;saveDrafts();renderDrafts();renderSetlist();render();els.deleteDraftDialog.close();showToast("セトリ案を削除しました");});
els.setlistList.addEventListener("pointerdown",event=>{if(event.target.closest("button[data-setlist-action]"))event.stopPropagation();});
els.setlistList.addEventListener("click",event=>{const button=event.target.closest("button[data-setlist-action]");if(!button)return;event.preventDefault();event.stopPropagation();const index=Number(button.dataset.index),action=button.dataset.setlistAction;if(action==="remove")todaySetlist.songs.splice(index,1);if(action==="up"&&index>0)[todaySetlist.songs[index-1],todaySetlist.songs[index]]=[todaySetlist.songs[index],todaySetlist.songs[index-1]];if(action==="down"&&index<todaySetlist.songs.length-1)[todaySetlist.songs[index+1],todaySetlist.songs[index]]=[todaySetlist.songs[index],todaySetlist.songs[index+1]];saveSetlistData();renderSetlist();render();});
[els.setlistName,els.setlistStreamTitle,els.setlistMemo].forEach(input=>input.addEventListener("input",syncSetlistFields));
$("#saveDraftSetlist").addEventListener("click",()=>saveCurrentAsDraft(false));
$("#updateDraftSetlist").addEventListener("click",()=>saveCurrentAsDraft(true));
$("#cancelDraftEdit").addEventListener("click",()=>{editingDraftId=null;renderSetlist();showToast("セトリ案編集モードを解除しました");});
$("#saveSetlist").addEventListener("click",handleCommitSetlistRequest);
$("#copySetlist").addEventListener("click",async()=>{if(!todaySetlist.songs.length){showToast("セトリに曲を追加してください");return;}try{await navigator.clipboard.writeText(setlistText());showToast("セトリをコピーしました");}catch(_){const area=document.createElement("textarea");area.value=setlistText();document.body.append(area);area.select();document.execCommand("copy");area.remove();showToast("セトリをコピーしました");}});
$("#exportSetlist").addEventListener("click",()=>{if(!todaySetlist.songs.length){showToast("セトリに曲を追加してください");return;}const blob=new Blob([setlistText()],{type:"text/plain;charset=utf-8"}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url;link.download=`setlist-${todaySetlist.date}.txt`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
els.artistSearch.addEventListener("input",()=>renderArtists(els.artistSearch.value));
els.artistList.addEventListener("pointerdown",event=>{if(event.target.closest("button[data-artist-vocal-apply],button[data-artist-edit],button[data-artist-song]"))event.stopPropagation();});
els.artistList.addEventListener("click",event=>{const bulkButton=event.target.closest("button[data-artist-vocal-apply]");if(bulkButton){event.preventDefault();event.stopPropagation();const artist=bulkButton.dataset.artistVocalApply,select=bulkButton.closest(".artist-card")?.querySelector("select[data-artist-vocal-select]");if(select?.value==="__keep"){showToast("設定するボーカル属性を選んでください");return;}const vocalType=normalizeVocalType(select?.value||""),targets=songs.filter(song=>song.artist===artist),label=vocalType||"未設定";if(!targets.length){showToast("対象の曲が見つかりません");return;}if(!confirm(`「${artist}」の曲 ${targets.length}件に ${label} を設定します。よろしいですか？`))return;targets.forEach(song=>song.vocalType=vocalType);saveSongs();render();renderArtists(els.artistSearch.value);showToast(`「${artist}」の${targets.length}曲に${label}を設定しました`);return;}const editButton=event.target.closest("button[data-artist-edit]");if(editButton){event.preventDefault();event.stopPropagation();openSongFormById(editButton.dataset.artistEdit);return;}const button=event.target.closest("button[data-artist-song]");if(!button)return;event.preventDefault();event.stopPropagation();const song=songs.find(item=>item.id===button.dataset.artistSong);if(!song)return;showSongCardById(song.id,{title:song.title,artist:song.artist});});
els.singLogList.addEventListener("pointerdown",event=>{if(event.target.closest("button[data-sing-log-action]"))event.stopPropagation();});
els.singLogList.addEventListener("click",event=>{const button=event.target.closest("button[data-sing-log-action]");if(!button)return;event.preventDefault();event.stopPropagation();if(button.dataset.singLogAction==="delete")deleteSingLogById(button.dataset.singLogId);});
els.singLogSearch.addEventListener("input",renderSingLogs);
els.singLogTypeFilter.addEventListener("change",renderSingLogs);
els.rankButtons.forEach(button=>button.addEventListener("click",()=>{singRankType=button.dataset.rankType;els.rankButtons.forEach(item=>item.classList.toggle("active",item===button));renderSingLogs();}));
$("#closeSingRecord").addEventListener("click",closeSingRecord);
$("#cancelSingRecord").addEventListener("click",closeSingRecord);
els.singRecordForm.addEventListener("submit",event=>{event.preventDefault();const song=songs[Number(els.singRecordSongIndex.value)];if(!song){closeSingRecord();return;}const log=completeSongById(song.id,{type:els.singRecordType.value,karaoke:els.singRecordKaraoke.value,memo:els.singRecordMemo.value.trim()});closeSingRecord();if(log)showToast(`「${log.title}」を${log.type}として記録しました`);});
els.themeButton?.addEventListener("click",()=>toggleThemePanel());
$("#closeTheme")?.addEventListener("click",()=>toggleThemePanel(false));
document.querySelectorAll("[data-theme-preset]").forEach(b=>b.addEventListener("click",()=>applyTheme({...themePresets[b.dataset.themePreset],preset:b.dataset.themePreset})));
document.querySelectorAll("[data-mode-choice]").forEach(b=>b.addEventListener("click",()=>{const t=loadTheme();t.mode=b.dataset.modeChoice;t.preset="custom";applyTheme(t);}));
document.querySelectorAll("[data-accent-choice]").forEach(b=>b.addEventListener("click",()=>{const t=loadTheme();t.accent=b.dataset.accentChoice;t.preset="custom";applyTheme(t);}));
els.supabaseUrlInput?.addEventListener("input",handleSupabaseConnectionSettingInput);
els.supabaseKeyInput?.addEventListener("input",handleSupabaseConnectionSettingInput);
els.supabaseUrlInput?.addEventListener("change",handleSupabaseConnectionSettingInput);
els.supabaseKeyInput?.addEventListener("change",handleSupabaseConnectionSettingInput);
els.testSupabaseConnectionButton?.addEventListener("click",testSupabaseConnection);
els.testSupabaseStateButton?.addEventListener("click",testSupabaseStateRoundTrip);
els.supabaseAnonymousLoginButton?.addEventListener("click",signInSupabaseAnonymously);
els.createSupabaseWorkspaceButton?.addEventListener("click",createSupabaseTestWorkspace);
els.verifySupabaseWorkspaceButton?.addEventListener("click",verifySupabaseWorkspaceFromUi);
els.clearSupabaseWorkspaceButton?.addEventListener("click",clearSavedSupabaseWorkspace);
els.testSupabaseWorkspaceStateButton?.addEventListener("click",testSupabaseWorkspaceStateRoundTrip);
els.createSupabasePairingCodeButton?.addEventListener("click",createSupabasePairingCode);
els.consumeSupabasePairingCodeButton?.addEventListener("click",consumeSupabasePairingCode);
els.uploadSupabaseTodaySetlistButton?.addEventListener("click",uploadSupabaseTodaySetlist);
els.previewSupabaseTodaySetlistButton?.addEventListener("click",previewSupabaseTodaySetlist);
els.applySupabaseTodaySetlistButton?.addEventListener("click",applySupabaseTodaySetlistPreview);
$("#exportCsvButton").addEventListener("click",exportSongsCSV);
$("#openCsvDebugButton")?.addEventListener("click",()=>{els.csvDebugPanel.hidden=false;els.csvDebugPanel.open=true;if(!els.csvDebugContent.innerHTML.trim())els.csvDebugContent.innerHTML='<div class="debug-block"><strong>CSV診断</strong><small>CSVを読み込むと、見出し・状態列・曲ID列の診断結果がここに表示されます。</small></div>';els.csvDebugPanel.scrollIntoView({behavior:"smooth",block:"start"});});
$("#backupJsonButton").addEventListener("click",exportBackupJSON);
connectDiagnosticButtons();
els.restoreJson.addEventListener("change",async event=>{const file=event.target.files[0];if(!file)return;try{pendingBackup=normalizeBackup(JSON.parse(await file.text()));els.restoreSummary.textContent=`曲 ${pendingBackup.songs.length} 件 / 今日のセトリ ${pendingBackup.todaySetlist.songs.length} 曲 / 過去のセトリ ${pendingBackup.streams.length} 件 / セトリ案 ${pendingBackup.draftSetlists.length} 件 / 歌唱履歴 ${pendingBackup.singLogs.length} 件を復元します。`;els.restoreDialog.showModal();}catch(error){pendingBackup=null;showToast(`復元できませんでした：${error.message}`);}event.target.value="";});
$("#cancelRestore").addEventListener("click",()=>{pendingBackup=null;els.restoreDialog.close();});
$("#confirmRestore").addEventListener("click",()=>{if(!pendingBackup)return;applyBackup(pendingBackup);pendingBackup=null;els.restoreDialog.close();showToast("バックアップを復元しました");});
els.csv.addEventListener("change",async event=>{const file=event.target.files[0];if(!file)return;try{const imported=parseCSV(await file.text());if(!imported.length)throw new Error("曲名のある行がありません");songs=imported;clearFocusedSong();currentPage=1;saveSongs();rebuildStatuses();render();const debug=globalThis.hootoLastCsvDebug,counts=debug?.finalStatusCounts||{},idWarning=debug?.songIdDuplicateCount>0?" / ⚠ 曲ID重複あり":"";if(debug)renderCsvDebug(debug);showMainTab("settings");if(debug)setTimeout(()=>els.csvDebugPanel.scrollIntoView({behavior:"smooth",block:"start"}),80);showToast(`${songs.length}曲を読み込みました / 状態列 ${debug?.statusHeader||"未検出"} / 曲ID列 ${debug?.hasSongIdColumn?"あり":"なし"} / 歌える ${counts["歌える"]||0} / 練習中 ${counts["練習中"]||0} / 要確認 ${counts["要確認"]||0}${debug?.warning?" / ⚠ 状態列を確認してください":""}${idWarning}`);}catch(error){showToast(`読み込めませんでした：${error.message}`);}event.target.value="";});
restoreSupabaseConnectionSettings();
restoreSupabaseWorkspaceState();
els.streamDate.value=todayString();
saveSongs();
applyTheme(loadTheme());
rebuildStatuses();
render();
renderHistory();
renderSetlist();
renderDrafts();
renderArtists();
renderSingLogs();
renderDiagnostics();
updateRemoteModeButton();
if(shouldOpenRemoteMode())showRemoteMode();
