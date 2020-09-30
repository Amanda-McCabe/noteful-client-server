const NotesService = {
  getAllNotes(knex) {
    return knex.select('*').from('noteful_notes'); 
  },
  
  getById(knex, id) {
    return knex
      .select('*')
      .from('noteful_notes')
      .where('id', id)
      .first();
  },

  insertNote(knex, note) {
    return knex
      .insert(note)
      .into('noteful_notes')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },
  
  updateNote(knex, id, updateFields) {
    return knex
      .select('*')
      .from('noteful_notes')
      .where('id', id)
      .update(updateFields);
  },

  deleteNote(knex, id) {
    return knex
      .select
      .from('noteful_notes')
      .where({ id })
      .delete();
  },
};
  
module.exports = NotesService;