const FoldersService = {
  getAllFolders(knex) {
    return knex.select('*').from('noteful_folders'); 
  },

  getById(knex, id) {
    return knex
      .select('*')
      .from('noteful_folders')
      .where('id', id)
      .first();
  },

  insertFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('noteful_folders')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },

  updateFolder(knex, id, updateFields) {
    return knex
      .select('*')
      .from('noteful_folders')
      .where('id', id)
      .update(updateFields);
  },

  deleteFolder(knex, id) {
    return knex
      .select('*')
      .from('noteful_folders')
      .where('id', id)
      .delete();
  },
};

module.exports = FoldersService;