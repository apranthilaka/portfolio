import { supabase } from '$lib/supabaseClient';

export async function load() {
    const { data, error } = await supabase
        .from('books')
        .select('*')
        .order('title', { ascending: true });

    if (error) {
        console.error('Error:', error);
        return { books: [] };
    }

    return {
        books: data,
    };
}
