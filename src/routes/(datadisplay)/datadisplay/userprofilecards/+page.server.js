import { supabase } from '$lib/supabaseClient';

export async function load() {
    // query selector
    const { data, error } = await supabase
        .from('books')
        .select('*')
        .order('title', { ascending: true });

    // error handling
    if (error) {
        console.error('Error fetching books:', error);
        return {
            books: [],
        };
    }

    // return result
    return {
        // Using ?? [] ensures you always return an array. Nuish operator. If data is true return it. If its null or undefined return the empty array
        books: data ?? [],
    };
}

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const title = formData.get('title');
        const author = formData.get('author');

        // Basic validation
        if (!title || !author) {
            return fail(400, { message: 'Missing title or author' });
        }

        const { error } = await supabase
            .from('books')
            .insert([{ title, author }]);

        if (error) {
            return fail(500, { message: 'Could not add book' });
        }

        return { success: true };
    },
};
