package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"makoto/internal"
)

// Run will start the server
func main() {
	var r = gin.Default()
	v1 := r.Group("/v1")
	{
		v1.GET("/entries", allEntriesHandler)
		v1.POST("/entries", createEntryHandler)
	}
	// signupRoutes(v1)
	// entriesRoutes(v1)
	r.Run(":3000")
}

func allEntriesHandler(c *gin.Context) {

	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})

}

func createEntryHandler(c *gin.Context) {
	var entry internal.Entry

	if err := c.ShouldBindJSON(&entry); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, entry)

}
