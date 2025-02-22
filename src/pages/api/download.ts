"user server";

export default async function Download(req: any, res: any) {
    
  if (req.method === "GET") {
    try {
      // Redirige directement vers le fichier statique
      res.writeHead(302, {
        Location: "/cv1.pdf",
      });
      res.end();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erreur lors du téléchargement." });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}

/*   if (req.method === 'GET') {
        try {

            // Vérifier et mettre à jour les statistiques dans la base de données
            const [result] : any = await db.promise().query(
              'SELECT * FROM downloads WHERE file_name = "cv.pdf"'
            );
            
            if (result.length === 0) {
                await db.promise().query(
                    'INSERT INTO downloads (file_name, download_count) VALUES ("cv.pdf", 0)'
                  );
            }

            await db.promise().query(
                'UPDATE downloads SET download_count = download_count + 1 WHERE file_name = "cv.pdf"'
              );

            // Récupérer le nombre de téléchargements après la mise à jour
            const [rows] : any = await db.promise().query(
                'SELECT download_count FROM downloads WHERE file_name = "cv.pdf"'
            );

           

            // Rediriger l'utilisateur vers l'URL directe du fichier
            res.writeHead(302, {
                Location: '/cv.pdf',
            });
            res.end();

            const download_count = rows[0].download_count 
            console.log(`Le nombre de téléchargements du fichier "cv.pdf" est maintenant de ${rows[0].download_count} fois.`);

            res.status(200).json({url: '/cv.pdf', download_count :`${rows[0].download_count} ` ,message: 'Téléchargement réussi'});
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Erreur lors du téléchargement' });
        }
    }else{
        res.status(405).json({ message: 'Méthode non autorisée' });
    } */
