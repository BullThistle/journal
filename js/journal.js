function Journal(title, entry){
  this.title = title;
  this.entry = entry;
}

Journal.prototype.words = function() {
  return this.entry.trim().split(/\s+/).length;
};

Journal.prototype.vowels = function() {
  return (this.entry.match(/[aeiou]/gi) || []).length;
};

Journal.prototype.consonants = function() {
  return (this.entry.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
};

exports.entryModule = Journal;
