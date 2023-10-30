<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Students with Grade A</title>
            </head>
            <body>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    <xsl:for-each select="//STUDENT[GRADE='A']">
                        <tr>
                            <td><xsl:value-of select="NAME"/></td>
                            <td><xsl:value-of select="AGE"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
